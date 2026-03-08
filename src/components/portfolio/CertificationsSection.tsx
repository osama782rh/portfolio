import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Award, GraduationCap, Clock, ShieldCheck, Cloud, Network } from "lucide-react";
import TiltCard from "./TiltCard";

const ITEMS = [
  {
    icon: GraduationCap,
    label: "Diplôme d'ingénieur",
    title: "Ingénieur ESIEE Paris",
    desc: "Formation d'ingénieur en informatique avec focus développement logiciel et systèmes d'information.",
    tags: ["École d'ingénieurs", "Informatique", "Ingénierie logicielle"],
    status: null,
    badge: null,
  },
  {
    icon: Award,
    label: "Certification obtenue",
    title: "Azure Fundamentals (AZ-900)",
    desc: "Fondamentaux du cloud Microsoft Azure : services, sécurité, pricing et gouvernance.",
    tags: ["Azure", "Cloud", "Fondamentaux"],
    status: "obtained" as const,
    badge: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffabd6f23c98/image.png",
  },
  {
    icon: ShieldCheck,
    label: "Certification obtenue",
    title: "Security Compliance & Identity (SC-900)",
    desc: "Fondamentaux sécurité, conformité et identité Microsoft : Zero Trust, gouvernance et protection des données.",
    tags: ["Microsoft", "Sécurité", "Identité"],
    status: "obtained" as const,
    badge: "https://images.credly.com/size/340x340/images/fc1352af-87fa-4947-ba54-398a0e63322e/image.png",
  },
  {
    icon: Cloud,
    label: "Certification obtenue",
    title: "AWS Cloud Practitioner",
    desc: "Fondamentaux AWS : architecture cloud, services principaux, sécurité, facturation et pricing.",
    tags: ["AWS", "Cloud", "Fondamentaux"],
    status: "obtained" as const,
    badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
  {
    icon: Network,
    label: "Certification obtenue",
    title: "Cisco CCNA",
    desc: "Réseaux informatiques : configuration de routeurs et switches, protocoles, sécurité réseau et automatisation.",
    tags: ["Cisco", "Réseau", "Infrastructure"],
    status: "obtained" as const,
    badge: "https://images.credly.com/size/340x340/images/9b0892af-81ef-4615-85e7-ba9e20dea8e3/image.png",
  },
  {
    icon: Clock,
    label: "En préparation",
    title: "Azure Developer (AZ-204)",
    desc: "Développement d'applications Azure : APIs, serverless, stockage, identité et DevOps.",
    tags: ["Azure", "Développement", "DevOps"],
    status: "upcoming" as const,
    badge: null,
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
                      <div className="shrink-0 flex flex-col items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="p-4 rounded-2xl bg-foreground/5 text-foreground/60"
                        >
                          <Icon size={28} />
                        </motion.div>
                        {item.badge && (
                          <motion.img
                            src={item.badge}
                            alt={`Badge ${item.title}`}
                            className="w-14 h-14 rounded-xl object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            initial={{ scale: 0, rotate: -20 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: "spring", damping: 15 }}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                          />
                        )}
                      </div>
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
