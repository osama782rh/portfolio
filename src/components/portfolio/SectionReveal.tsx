import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const SectionReveal = forwardRef<HTMLDivElement, Props>(({ children, className = "", delay = 0 }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

SectionReveal.displayName = "SectionReveal";
export default SectionReveal;
