import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    period: "Sept. 2022 – Sept. 2025",
    company: "Rexel France",
    context: "Alternance – Ingénierie QA & DevOps",
    roles: [
      {
        title: "Automaticien tests (Selenium, UFT)",
        bullets: [
          "Développement et maintenance de scénarios de tests automatisés pour applications web et desktop.",
          "Analyse des résultats, débogage des scripts et suivi de la qualité logicielle.",
        ],
        tags: ["Selenium", "UFT", "Tests automatisés"],
      },
      {
        title: "DevOps CI/CD (Azure DevOps)",
        bullets: [
          "Mise en place et évolution de pipelines CI/CD avec Azure DevOps.",
          "Intégration des tests automatisés dans la chaîne CI/CD pour sécuriser les mises en production.",
        ],
        tags: ["Azure DevOps", "CI/CD", "Automatisation"],
      },
    ],
  },
  {
    period: "2020 – 2021",
    company: "T-Express",
    context: "Développement web",
    roles: [
      {
        title: "Développeur Web (PHP, Laravel, SQL)",
        bullets: [
          "Conception et développement de fonctionnalités back-end avec Laravel et SQL.",
          "Mise en place de la logique métier, gestion des données et de l'authentification.",
        ],
        tags: ["PHP", "Laravel", "SQL"],
      },
    ],
  },
  {
    period: "2020",
    company: "Renault Service Plus",
    context: "Front-end",
    roles: [
      {
        title: "Développeur Web (React, HTML, CSS)",
        bullets: [
          "Création d'interfaces responsives avec React pour un outil interne.",
          "Intégration HTML/CSS propre, maintenable et compatible multi-navigateurs.",
        ],
        tags: ["React", "HTML", "CSS"],
      },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experiences" className="section-padding relative">
      <div className="line-accent mb-16" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Parcours
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Expériences <span className="text-gradient-gold">professionnelles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Principales missions en développement, automatisation de tests et DevOps.
            Ouvert à un CDI ainsi qu'à des missions freelance (SASU).
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <div className="relative pl-12 md:pl-20">
                  {/* Dot */}
                  <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />

                  <div className="glass rounded-2xl p-6 md:p-8 glass-hover">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="font-display font-bold text-foreground">{exp.company}</span>
                      <span className="text-xs text-dim">{exp.context}</span>
                    </div>

                    {exp.roles.map((role, rIdx) => (
                      <div key={rIdx} className={rIdx > 0 ? "mt-6 pt-6 border-t border-border" : ""}>
                        <h3 className="font-display font-semibold text-foreground mb-3">{role.title}</h3>
                        <ul className="space-y-2 mb-4">
                          {role.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="text-primary mt-1.5 shrink-0">▸</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {role.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
