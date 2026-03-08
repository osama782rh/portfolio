import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "./SectionReveal";

const EXPERIENCES = [
  {
    period: "2022 — 2025",
    company: "Rexel France",
    type: "Alternance",
    roles: [
      {
        title: "QA Automation Engineer",
        desc: "Développement de scénarios de tests automatisés Selenium & UFT. Analyse des résultats, débogage et suivi qualité sur plusieurs applications métier.",
        tags: ["Selenium", "UFT", "Tests E2E"],
      },
      {
        title: "DevOps Engineer",
        desc: "Pipelines CI/CD Azure DevOps, intégration des tests dans la chaîne de déploiement pour sécuriser les releases.",
        tags: ["Azure DevOps", "CI/CD", "Automation"],
      },
    ],
  },
  {
    period: "2020 — 2021",
    company: "T-Express",
    type: "Mission",
    roles: [
      {
        title: "Développeur Back-end",
        desc: "Conception de fonctionnalités back-end avec Laravel et SQL. Logique métier, gestion des données et authentification.",
        tags: ["PHP", "Laravel", "SQL"],
      },
    ],
  },
  {
    period: "2020",
    company: "Renault Service Plus",
    type: "Mission",
    roles: [
      {
        title: "Développeur Front-end",
        desc: "Interfaces responsives React pour un outil interne. Intégration HTML/CSS maintenable et multi-navigateurs.",
        tags: ["React", "HTML/CSS"],
      },
    ],
  },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experiences" className="section-padding relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">02</span>
            <div className="h-px flex-1 max-w-[60px] bg-primary" />
            <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Expériences</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            Parcours <span className="text-gradient-gold">professionnel</span>
          </h2>
        </SectionReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-primary to-transparent"
            />
          </div>

          {EXPERIENCES.map((exp, idx) => (
            <SectionReveal key={idx} delay={idx * 0.15}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-20 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                  />
                </div>

                {/* Period */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-8 md:pl-0`}>
                  <span className="font-mono text-sm text-primary">{exp.period}</span>
                  <div className="font-display text-2xl font-bold text-foreground mt-1">{exp.company}</div>
                  <span className="text-xs text-dim uppercase tracking-wider">{exp.type}</span>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-8 md:pl-12 space-y-4`}>
                  {exp.roles.map((role, rIdx) => (
                    <motion.div
                      key={rIdx}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + rIdx * 0.15 }}
                      className="glass rounded-2xl p-5 hover:border-primary/20 transition-all duration-500 group"
                    >
                      <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{role.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {role.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 text-[11px] rounded-full bg-primary/10 text-primary font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
