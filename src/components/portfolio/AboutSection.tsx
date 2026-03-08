import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import TiltCard from "./TiltCard";
import AnimatedCounter from "./AnimatedCounter";
import MarqueeTicker from "./MarqueeTicker";

const STATS = [
  { value: 3, suffix: "+", label: "Ans d'expérience" },
  { value: 10, suffix: "+", label: "Projets livrés" },
  { value: 5, suffix: "+", label: "Certifications" },
  { value: 100, suffix: "%", label: "Passion" },
];

const CHIPS = ["Java", "Python", "C++", "TypeScript", "React", "Docker", "Terraform", "Azure DevOps", "CI/CD", "Next.js", "Node.js", "PostgreSQL"];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Marquee behind */}
      <div className="absolute top-20 left-0 right-0 opacity-30 -rotate-2 pointer-events-none">
        <MarqueeTicker items={CHIPS} speed={40} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">01</span>
            <div className="h-px flex-1 max-w-[60px] bg-primary" />
            <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">À propos</span>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - 3 cols */}
          <div className="lg:col-span-3">
            <SectionReveal>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-8">
                Un ingénieur qui code avec{" "}
                <span className="text-gradient-gold italic">précision</span>{" "}
                et déploie avec{" "}
                <span className="text-gradient-gold italic">confiance</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Diplômé de l'ESIEE Paris, je combine une expertise en développement
                full stack avec une culture DevOps solide. Mon parcours chez Rexel France
                m'a permis de maîtriser l'automatisation des tests, les pipelines CI/CD
                et le déploiement cloud Azure.
              </p>
              <p className="text-base text-dim leading-relaxed mb-10">
                En parallèle, je développe des projets freelance ambitieux via ma structure SASU —
                des SaaS IA aux plateformes de mise en relation, chaque projet reflète
                mon exigence de qualité et d'innovation.
              </p>
            </SectionReveal>

            {/* Key areas with horizontal scroll feel */}
            <SectionReveal delay={0.25}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Back-end", desc: "Java, Python, C++ — APIs robustes & scalables", icon: "⚙️" },
                  { title: "DevOps", desc: "Azure DevOps, Docker, Terraform, CI/CD", icon: "🚀" },
                  { title: "QA Automation", desc: "Selenium, UFT — Tests E2E automatisés", icon: "🔬" },
                  { title: "Cloud Azure", desc: "Certifié AZ-900, préparation AZ-204", icon: "☁️" },
                ].map((item, i) => (
                  <TiltCard key={item.title} className="relative" tiltStrength={8}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="glass rounded-2xl p-5 h-full"
                    >
                      <span className="text-2xl mb-3 block">{item.icon}</span>
                      <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  </TiltCard>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right - 2 cols - Stats */}
          <div className="lg:col-span-2">
            <div className="sticky top-32 space-y-5">
              {STATS.map((stat, i) => (
                <SectionReveal key={stat.label} delay={i * 0.1}>
                  <TiltCard tiltStrength={6}>
                    <div className="glass rounded-2xl p-6 text-center group hover:border-primary/20 transition-colors duration-500">
                      <div className="font-display text-5xl font-black text-gradient-gold mb-2">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2 + i * 0.3} />
                      </div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </TiltCard>
                </SectionReveal>
              ))}

              {/* Availability card */}
              <SectionReveal delay={0.5}>
                <div className="glass rounded-2xl p-6 border-primary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-display font-bold text-sm text-foreground">Disponible maintenant</span>
                  </div>
                  <p className="text-xs text-dim leading-relaxed">
                    Ouvert à un CDI ainsi qu'à des missions freelance.
                    Facturation possible via ma structure SASU.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
