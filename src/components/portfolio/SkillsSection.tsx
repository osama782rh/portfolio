import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const CATEGORIES = [
  {
    title: "Langages",
    icon: "⚡",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    title: "Frameworks & Libs",
    icon: "🧱",
    skills: [
      { name: "React / React Native", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Laravel", level: 70 },
      { name: "Flutter", level: 65 },
      { name: "TensorFlow", level: 60 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "Azure DevOps", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Terraform", level: 75 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Azure Cloud", level: 80 },
    ],
  },
  {
    title: "QA & Testing",
    icon: "🔍",
    skills: [
      { name: "Selenium", level: 90 },
      { name: "UFT", level: 85 },
      { name: "Tests automatisés", level: 90 },
      { name: "Test strategy", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="line-accent mb-16" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Compétences <span className="text-gradient-gold">techniques</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Un profil full stack avec une spécialisation DevOps et QA.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, catIdx) => (
            <SectionReveal key={cat.title} delay={catIdx * 0.1}>
              <div className="glass rounded-2xl p-6 md:p-8 h-full glass-hover">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-display font-bold text-lg text-foreground">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-dim font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
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
