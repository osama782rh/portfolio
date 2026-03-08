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
          <div key={`${item}-${i}`} className="flex items-center gap-6 shrink-0">
            <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground/5 hover:text-foreground/15 transition-colors duration-500 cursor-default">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
