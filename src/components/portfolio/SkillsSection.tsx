import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import TiltCard from "./TiltCard";

const CATEGORIES = [
  {
    title: "Langages",
    icon: "⚡",
    skills: [
      { name: "Java", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "Python", level: 65 },
      { name: "C/C++", level: 55 },
      { name: "PHP", level: 50 },
    ],
  },
  {
    title: "Frameworks",
    icon: "🧱",
    skills: [
      { name: "React / React Native", level: 75 },
      { name: "Next.js", level: 60 },
      { name: "Laravel", level: 50 },
      { name: "Flutter", level: 45 },
      { name: "TensorFlow", level: 35 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "Azure DevOps", level: 75 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "Azure Cloud", level: 70 },
      { name: "Docker", level: 70 },
      { name: "Terraform", level: 55 },
    ],
  },
  {
    title: "QA & Testing",
    icon: "🔬",
    skills: [
      { name: "Selenium", level: 75 },
      { name: "Tests E2E", level: 70 },
      { name: "UFT", level: 65 },
      { name: "Test Strategy", level: 60 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-foreground/50 font-mono text-sm tracking-widest uppercase">04</span>
            <div className="h-px flex-1 max-w-[60px] bg-foreground/30" />
            <span className="text-foreground/50 font-display font-semibold text-sm tracking-widest uppercase">Expertise</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            Stack <span className="text-gradient-silver">technique</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, catIdx) => (
            <SectionReveal key={cat.title} delay={catIdx * 0.1}>
              <TiltCard tiltStrength={4} className="h-full">
                <div className="glass rounded-2xl p-6 md:p-8 h-full hover:border-foreground/10 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-3xl">{cat.icon}</span>
                    <h3 className="font-display text-xl font-bold text-foreground">{cat.title}</h3>
                  </div>
                  <div className="space-y-5">
                    {cat.skills.map((skill, i) => (
                      <div key={skill.name}>
                        <div className="text-sm mb-2">
                          <span className="text-foreground/70 font-medium">{skill.name}</span>
                        </div>
                        <div className="h-[3px] rounded-full bg-foreground/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="h-full rounded-full bg-gradient-to-r from-foreground/60 to-foreground/20"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
