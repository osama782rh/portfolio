import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function AnimatedText({ text, className = "", delay = 0, stagger = 0.03 }: Props) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block overflow-hidden mr-[0.25em]">
          {word.split("").map((char, cIdx) => {
            const globalIdx = words.slice(0, wIdx).join("").length + cIdx;
            return (
              <motion.span
                key={`${wIdx}-${cIdx}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: delay + globalIdx * stagger,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
