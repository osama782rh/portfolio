import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ParticleField from "./ParticleField";
import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <ParticleField />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-48 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.04, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-48 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px]"
        />
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.03, scaleX: 1 }}
            transition={{ duration: 2, delay: 1 + i * 0.3 }}
            className="absolute h-px bg-foreground"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0, transformOrigin: "left" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-emerald-400"
            />
            <span className="text-sm text-muted-foreground font-mono tracking-wider uppercase">
              Disponible pour CDI & missions freelance
            </span>
          </motion.div>

          {/* Giant name */}
          <div className="mb-6">
            <h1 className="font-display font-bold leading-[0.9] tracking-tighter">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] text-foreground"
                >
                  OSAMA
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] text-gradient-gold"
                >
                  RAHIM
                </motion.div>
              </div>
            </h1>
          </div>

          {/* Role with typewriter-like reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8"
          >
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-primary to-transparent" />
            <p className="font-display text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              <AnimatedText text="Ingénieur Full Stack" delay={1.6} />
              <span className="text-primary mx-2">·</span>
              <AnimatedText text="DevOps" delay={2.2} />
              <span className="text-primary mx-2">·</span>
              <AnimatedText text="Cloud Azure" delay={2.6} />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-base md:text-lg text-dim max-w-2xl leading-relaxed mb-12"
          >
            Je conçois des applications robustes et industrialise les déploiements
            avec une exigence de qualité, de performance et d'innovation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-5 mb-16"
          >
            <MagneticButton strength={0.2}>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)]"
              >
                <span className="relative z-10">Explorer mes projets</span>
                <motion.span
                  className="absolute inset-0 bg-foreground origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass font-display font-bold text-sm text-foreground hover:border-primary/30 transition-all duration-500"
              >
                Discutons
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/osama782rh", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/osama-rahim", label: "LinkedIn" },
              { icon: Mail, href: "mailto:contact@osamarahim.dev", label: "Email" },
            ].map(({ icon: Icon, href, label }, i) => (
              <MagneticButton key={label} strength={0.4}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative p-3 text-dim hover:text-primary transition-colors duration-500"
                >
                  <Icon size={22} />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-dim opacity-0 group-hover:opacity-100 transition-opacity">
                    {label}
                  </span>
                </a>
              </MagneticButton>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-dim uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-dim" />
        </motion.div>
      </motion.div>
    </section>
  );
}
