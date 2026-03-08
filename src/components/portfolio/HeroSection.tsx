import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";

function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);
  return { x, y };
}

const ROLES = ["Full Stack Developer", "DevOps Engineer", "Cloud Architect", "QA Automation"];

export default function HeroSection() {
  const { x, y } = useMousePosition();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax on scroll
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mouse parallax for orbs
  const orbX1 = useSpring(useTransform(x, [0, window.innerWidth], [-30, 30]), { damping: 30, stiffness: 100 });
  const orbY1 = useSpring(useTransform(y, [0, window.innerHeight], [-20, 20]), { damping: 30, stiffness: 100 });
  const orbX2 = useSpring(useTransform(x, [0, window.innerWidth], [20, -20]), { damping: 30, stiffness: 100 });
  const orbY2 = useSpring(useTransform(y, [0, window.innerHeight], [15, -15]), { damping: 30, stiffness: 100 });

  // Rotating role text
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Animated gradient orbs following mouse */}
      <motion.div
        style={{ x: orbX1, y: orbY1 }}
        className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full bg-foreground/5 blur-[150px]"
        />
      </motion.div>
      <motion.div
        style={{ x: orbX2, y: orbY2 }}
        className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.03, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full bg-foreground/5 blur-[120px]"
        />
      </motion.div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.025, scaleX: 1 }}
            transition={{ duration: 2.5, delay: 0.8 + i * 0.2, ease: "easeOut" }}
            className="absolute h-px bg-foreground"
            style={{ top: `${15 + i * 14}%`, left: 0, right: 0, transformOrigin: i % 2 === 0 ? "left" : "right" }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.015, scaleY: 1 }}
            transition={{ duration: 3, delay: 1.5 + i * 0.3, ease: "easeOut" }}
            className="absolute w-px bg-foreground"
            style={{ left: `${25 + i * 25}%`, top: 0, bottom: 0, transformOrigin: "top" }}
          />
        ))}
      </div>

      {/* Corner accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-8 left-8 w-16 h-16 border-l border-t border-foreground/20 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 2.1, duration: 1 }}
        className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-foreground/20 pointer-events-none"
      />

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow with animated line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center gap-4 mb-10 overflow-hidden"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-px w-12 bg-foreground/30 origin-left"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-[11px] font-mono text-foreground/40 uppercase tracking-[0.3em]"
            >
              Portfolio 2025
            </motion.span>
          </motion.div>

          {/* Giant name with staggered reveal and parallax */}
          <motion.div style={{ y: titleY }} className="mb-6">
            <h1 className="font-display font-bold leading-[0.88] tracking-tighter">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] text-foreground"
                >
                  OSAMA
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] text-gradient-silver"
                >
                  RAHIM
                </motion.div>
              </div>
            </h1>
          </motion.div>

          {/* Rotating role with line */}
          <motion.div
            style={{ y: subtitleY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center gap-6 mb-6"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
              className="h-px w-16 bg-gradient-to-r from-foreground/40 to-transparent origin-left hidden sm:block"
            />
            <div className="h-8 overflow-hidden">
              <motion.div
                key={roleIdx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-display text-xl sm:text-2xl md:text-3xl text-foreground/50 font-light tracking-wide"
              >
                {ROLES[roleIdx]}
              </motion.div>
            </div>
          </motion.div>

          {/* Subtitle chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {["Ingénieur ESIEE Paris", "Azure Certified", "3+ ans d'expérience"].map((chip, i) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + i * 0.15 }}
                className="text-[11px] font-mono text-foreground/30 px-3 py-1.5 rounded-full border border-foreground/8 uppercase tracking-wider"
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-base md:text-lg text-dim max-w-xl leading-relaxed mb-12"
          >
            Je conçois des applications robustes et industrialise les déploiements
            avec une exigence de qualité, de performance et d'innovation.
          </motion.p>

          {/* CTAs with reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-5 mb-16"
          >
            <MagneticButton strength={0.2}>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-display font-bold text-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_hsl(0_0%_100%/0.08)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explorer mes projets
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.span
                  className="absolute inset-0 bg-foreground/80"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass font-display font-bold text-sm text-foreground hover:border-foreground/20 transition-all duration-500 group"
              >
                Me contacter
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 group-hover:bg-foreground/60 transition-colors" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social with stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
            className="flex items-center gap-6"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 3 }}
              className="h-px w-8 bg-foreground/15 origin-left hidden sm:block"
            />
            {[
              { icon: Github, href: "https://github.com/osama782rh", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/osama-rahim", label: "LinkedIn" },
              { icon: Mail, href: "mailto:contact@osamarahim.dev", label: "Email" },
            ].map(({ icon: Icon, href, label }, i) => (
              <MagneticButton key={label} strength={0.4}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3 + i * 0.1 }}
                  className="group relative p-3 text-dim hover:text-foreground transition-colors duration-500"
                >
                  <Icon size={20} />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-dim opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-transparent to-foreground/20 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 3.6, duration: 0.8 }}
        />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-foreground/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
