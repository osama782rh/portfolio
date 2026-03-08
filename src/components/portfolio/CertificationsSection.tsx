import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Award, GraduationCap, Clock } from "lucide-react";

const ITEMS = [
  {
    icon: GraduationCap,
    label: "Diplôme d'ingénieur",
    title: "Ingénieur ESIEE Paris",
    desc: "Formation d'ingénieur en informatique à l'ESIEE Paris, avec un focus sur le développement logiciel et les systèmes d'information.",
    tags: ["École d'ingénieurs", "Informatique", "Ingénierie logicielle"],
    status: null,
  },
  {
    icon: Award,
    label: "Certification obtenue",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    desc: "Validation des fondamentaux du cloud Microsoft Azure : modèles de services, ressources, sécurité de base, pricing et gouvernance.",
    tags: ["Azure", "Cloud", "Fondamentaux"],
    status: "obtained" as const,
  },
  {
    icon: Clock,
    label: "En préparation",
    title: "Developing Solutions for Azure (AZ-204)",
    desc: "Préparation à la certification AZ-204 : développement d'applications et de services sur Azure, APIs, fonctions serverless, identité et intégration DevOps.",
    tags: ["Azure", "Développement", "DevOps"],
    status: "upcoming" as const,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="line-accent mb-16" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Parcours académique & cloud
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Formation & <span className="text-gradient-gold">certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Un socle d'ingénieur généraliste complété par une spécialisation Cloud Microsoft Azure.
          </p>
        </SectionReveal>

        <div className="space-y-6 max-w-3xl mx-auto">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.title} delay={idx * 0.15}>
                <div className="glass rounded-2xl p-6 md:p-8 glass-hover relative overflow-hidden">
                  {/* Glow */}
                  {item.status === "obtained" && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px]" />
                  )}

                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{item.label}</p>
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                            {tag}
                          </span>
                        ))}
                        {item.status === "obtained" && (
                          <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 font-semibold ml-auto">
                            ✓ Obtenue
                          </span>
                        )}
                        {item.status === "upcoming" && (
                          <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold ml-auto">
                            En cours
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
