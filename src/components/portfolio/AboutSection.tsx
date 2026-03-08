import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";

const STATS = [
  { value: "3+", label: "Ans d'expérience" },
  { value: "10+", label: "Projets livrés" },
  { value: "AZ-900", label: "Certifié Azure" },
  { value: "SASU", label: "Structure freelance" },
];

const CHIPS = ["Java", "Python", "C++", "TypeScript", "React", "Docker", "Terraform", "Azure DevOps", "CI/CD"];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="line-accent mb-16" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <SectionReveal>
            <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">
              À propos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Ingénieur passionné par le{" "}
              <span className="text-gradient-gold">code de qualité</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Diplômé de l'ESIEE Paris, je combine une expertise en développement
              full stack avec une culture DevOps solide. Mon parcours chez Rexel France
              m'a permis de maîtriser l'automatisation des tests, les pipelines CI/CD
              et le déploiement cloud Azure.
            </p>
            <p className="text-dim leading-relaxed mb-8">
              J'apprécie les environnements où l'on combine qualité du code,
              automatisation, observabilité et collaboration avec les équipes
              produit, QA et opérations. En parallèle, je développe des projets
              freelance via ma structure SASU.
            </p>

            <div className="flex flex-wrap gap-2">
              {CHIPS.map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full glass text-muted-foreground"
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </SectionReveal>

          {/* Right - Stats */}
          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass glass-hover rounded-2xl p-6 text-center"
                >
                  <div className="font-display text-3xl font-bold text-gradient-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-3">Domaines clés</h3>
              <ul className="space-y-2">
                {[
                  { label: "Back-end", desc: "Java, Python, C++ — APIs, services, scripts" },
                  { label: "DevOps", desc: "Azure DevOps, Docker, Terraform, CI/CD" },
                  { label: "QA", desc: "Selenium, tests automatisés, assurance qualité" },
                  { label: "Cloud", desc: "Microsoft Azure, certifié AZ-900" },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3 text-sm">
                    <span className="text-primary font-semibold shrink-0">{item.label}</span>
                    <span className="text-muted-foreground">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
