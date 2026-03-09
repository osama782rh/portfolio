import { motion } from "framer-motion";

const rings = [
  { size: "h-44 w-44", opacity: "opacity-25", duration: 18, rotate: 360 },
  { size: "h-60 w-60", opacity: "opacity-20", duration: 24, rotate: -360 },
  { size: "h-72 w-72", opacity: "opacity-10", duration: 30, rotate: 360 },
];

const nodes = [
  { className: "left-[18%] top-[24%]", duration: 7 },
  { className: "right-[22%] top-[30%]", duration: 9 },
  { className: "left-[28%] bottom-[24%]", duration: 8 },
  { className: "right-[18%] bottom-[20%]", duration: 10 },
  { className: "left-1/2 top-[18%]", duration: 11 },
];

export default function TechOrb() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        className="absolute inset-[22%] rounded-full border border-white/10"
      />

      {rings.map((ring) => (
        <motion.div
          key={ring.size}
          animate={{ rotate: ring.rotate, scale: [1, 1.04, 1] }}
          transition={{ duration: ring.duration, ease: "linear", repeat: Infinity }}
          className={`absolute left-1/2 top-1/2 ${ring.size} -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 ${ring.opacity}`}
        />
      ))}

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[radial-gradient(circle_at_center,hsl(0_0%_100%_/_0.16),transparent_68%)] shadow-[0_0_80px_hsl(0_0%_100%_/_0.08)]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
        className="absolute inset-[14%]"
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-white/70 shadow-[0_0_24px_hsl(0_0%_100%_/_0.35)]" />
        <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white/45" />
      </motion.div>

      {nodes.map((node) => (
        <motion.span
          key={node.className}
          animate={{ y: [0, -8, 0], opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: node.duration, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${node.className} h-2 w-2 rounded-full bg-white/70 shadow-[0_0_18px_hsl(0_0%_100%_/_0.3)]`}
        />
      ))}

      <div className="absolute inset-[18%] rounded-full bg-[conic-gradient(from_180deg,hsl(0_0%_100%_/_0.08),transparent_28%,hsl(0_0%_100%_/_0.04),transparent_68%,hsl(0_0%_100%_/_0.08))] blur-xl" />
    </div>
  );
}
