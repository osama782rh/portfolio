import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Target, Search, Lightbulb, Compass, Puzzle } from "lucide-react";

const QUALITIES = [
  { icon: Target, title: "Précis", text: "Sens du détail et rigueur dans l'exécution." },
  { icon: Search, title: "Curieux", text: "Veille technologique et apprentissage continu." },
  { icon: Lightbulb, title: "Créatif", text: "Solutions simples et élégantes aux problèmes complexes." },
  { icon: Compass, title: "Autonome", text: "Organisation, priorisation et sens des responsabilités." },
  { icon: Puzzle, title: "Orienté solutions", text: "Focalisé sur la résolution concrète des problèmes." },
];

export default function QualitiesSection() {
  return (
    <section className="section-padding relative">
      <div className="line-accent mb-16" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Savoir-être
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
            Soft <span className="text-gradient-gold">skills</span>
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {QUALITIES.map((q, i) => {
            const Icon = q.icon;
            return (
              <SectionReveal key={q.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 text-center glass-hover group h-full">
                  <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{q.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{q.text}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
