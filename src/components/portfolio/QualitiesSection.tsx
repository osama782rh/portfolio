import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import TiltCard from "./TiltCard";
import { Target, Search, Lightbulb, Compass, Puzzle } from "lucide-react";

const QUALITIES = [
  { icon: Target, title: "Précis", text: "Sens du détail et rigueur dans l'exécution." },
  { icon: Search, title: "Curieux", text: "Veille technologique et apprentissage continu." },
  { icon: Lightbulb, title: "Créatif", text: "Solutions élégantes aux problèmes complexes." },
  { icon: Compass, title: "Autonome", text: "Organisation, priorisation et responsabilités." },
  { icon: Puzzle, title: "Solution-driven", text: "Focalisé sur l'impact concret et business." },
];

export default function QualitiesSection() {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-foreground/50 font-mono text-sm tracking-widest uppercase">06</span>
            <div className="h-px flex-1 max-w-[60px] bg-foreground/30" />
            <span className="text-foreground/50 font-display font-semibold text-sm tracking-widest uppercase">Savoir-être</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            Soft <span className="text-gradient-silver">skills</span>
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {QUALITIES.map((q, i) => {
            const Icon = q.icon;
            return (
              <SectionReveal key={q.title} delay={i * 0.08}>
                <TiltCard tiltStrength={12} className="h-full">
                  <div className="glass rounded-2xl p-6 text-center group hover:border-foreground/10 transition-all duration-500 h-full relative overflow-hidden">
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors"
                      >
                        <Icon size={24} className="text-foreground/60" />
                      </motion.div>
                      <h3 className="font-display font-bold text-foreground mb-2">{q.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{q.text}</p>
                    </div>
                  </div>
                </TiltCard>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
