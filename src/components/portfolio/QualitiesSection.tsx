import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import TiltCard from "./TiltCard";
import { Target, Search, Lightbulb, Compass, Puzzle } from "lucide-react";

const QUALITIES = [
  { icon: Target, title: "Précis", text: "Sens du détail et rigueur dans l'exécution de chaque feature.", color: "from-red-500/20 to-orange-500/20" },
  { icon: Search, title: "Curieux", text: "Veille technologique constante et apprentissage continu.", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Lightbulb, title: "Créatif", text: "Solutions élégantes aux problèmes complexes.", color: "from-yellow-500/20 to-amber-500/20" },
  { icon: Compass, title: "Autonome", text: "Organisation, priorisation et sens des responsabilités.", color: "from-green-500/20 to-emerald-500/20" },
  { icon: Puzzle, title: "Solution-driven", text: "Focalisé sur la résolution concrète et l'impact business.", color: "from-purple-500/20 to-pink-500/20" },
];

export default function QualitiesSection() {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">06</span>
            <div className="h-px flex-1 max-w-[60px] bg-primary" />
            <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Savoir-être</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            Soft <span className="text-gradient-gold">skills</span>
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {QUALITIES.map((q, i) => {
            const Icon = q.icon;
            return (
              <SectionReveal key={q.title} delay={i * 0.08}>
                <TiltCard tiltStrength={12} className="h-full">
                  <div className="glass rounded-2xl p-6 text-center group hover:border-primary/20 transition-all duration-500 h-full relative overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${q.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                      >
                        <Icon size={24} className="text-primary" />
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
