import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.magnetic
      ) {
        setHovered(true);
      }
    };
    const onOut = () => setHovered(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  // Hide on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      >
        <motion.div
          animate={{
            width: hovered ? 60 : clicked ? 30 : 40,
            height: hovered ? 60 : clicked ? 30 : 40,
            borderRadius: "50%",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="border border-foreground/30 rounded-full"
          style={{ marginLeft: hovered ? -10 : clicked ? 5 : 0, marginTop: hovered ? -10 : clicked ? 5 : 0 }}
        />
      </motion.div>
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999]"
      />
    </>
  );
}
