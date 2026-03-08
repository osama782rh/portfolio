import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Award, GraduationCap, Clock } from "lucide-react";
import TiltCard from "./TiltCard";

const ITEMS = [
  {
    icon: GraduationCap,
    label: "Diplôme d'ingénieur",
    title: "Ingénieur ESIEE Paris",
    desc: "Formation d'ingénieur en informatique avec focus développement logiciel et systèmes d'information.",
    tags: ["École d'ingénieurs", "Informatique", "Ingénierie logicielle"],
    status: null,
  },
  {
    icon: Award,
    label: "Certification obtenue",
    title: "Azure Fundamentals (AZ-900)",
    desc: "Fondamentaux du cloud Microsoft Azure : services, sécurité, pricing et gouvernance.",
    tags: ["Azure", "Cloud", "Fondamentaux"],
    status: "obtained" as const,
  },
  {
    icon: Clock,
    label: "En préparation",
    title: "Azure Developer (AZ-204)",
    desc: "Développement d'applications Azure : APIs, serverless, stockage, identité et DevOps.",
    tags: ["Azure", "Développement", "DevOps"],
    status: "upcoming" as const,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-foreground/50 font-mono text-sm tracking-widest uppercase">05</span>
            <div className="h-px flex-1 max-w-[60px] bg-foreground/30" />
            <span className="text-foreground/50 font-display font-semibold text-sm tracking-widest uppercase">Formation</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            Certifications & <span className="text-gradient-silver">diplômes</span>
          </h2>
        </SectionReveal>

        <div className="max-w-3xl mx-auto space-y-6">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.title} delay={idx * 0.15}>
                <TiltCard tiltStrength={4}>
                  <div className="glass rounded-2xl p-6 md:p-8 hover:border-foreground/10 transition-all duration-500 relative overflow-hidden group">
                    {item.status === "obtained" && (
                      <motion.div
                        animate={{ opacity: [0.02, 0.05, 0.02] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-0 right-0 w-40 h-40 bg-foreground rounded-full blur-[80px]"
                      />
                    )}

                    <div className="flex items-start gap-5 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="p-4 rounded-2xl bg-foreground/5 text-foreground/60 shrink-0"
                      >
                        <Icon size={28} />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                        <div className="flex flex-wrap items-center gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 text-[10px] rounded-full bg-foreground/5 text-foreground/50 font-medium">
                              {tag}
                            </span>
                          ))}
                          {item.status === "obtained" && (
                            <span className="px-3 py-1 text-[10px] rounded-full bg-foreground/10 text-foreground/70 font-bold ml-auto">
                              ✓ Obtenue
                            </span>
                          )}
                          {item.status === "upcoming" && (
                            <motion.span
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="px-3 py-1 text-[10px] rounded-full bg-foreground/5 text-foreground/50 font-bold ml-auto"
                            >
                              En cours
                            </motion.span>
                          )}
                        </div>
                      </div>
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
