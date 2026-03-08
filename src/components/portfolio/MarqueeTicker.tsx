import { motion } from "framer-motion";

interface Props {
  items: string[];
  speed?: number;
  className?: string;
}

export default function MarqueeTicker({ items, speed = 30, className = "" }: Props) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 whitespace-nowrap"
      >
        {duplicated.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-6 shrink-0"
          >
            <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground/10 hover:text-primary/40 transition-colors duration-500 cursor-default">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-primary/20" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
