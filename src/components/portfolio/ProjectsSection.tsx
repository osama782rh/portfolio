import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, X, Search, ArrowUpRight } from "lucide-react";
import SectionReveal from "./SectionReveal";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

interface Project {
  title: string;
  desc: string;
  github: string | null;
  demo: string | null;
  tech: string[];
  kind: "Académique" | "Freelance";
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "WorkPilot.AI",
    desc: "Plateforme SaaS qui automatise la gestion quotidienne d'indépendants et de PME grâce à l'IA générative. Devis, factures, suivi — tout automatisé.",
    github: null, demo: null,
    tech: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Stripe", "AWS"],
    kind: "Freelance", featured: true,
  },
  {
    title: "Taskin",
    desc: "Plateforme de mise en relation clients / professionnels, avec application mobile React Native et interface web responsive.",
    github: null, demo: null,
    tech: ["React Native", "TypeScript", "Expo", "React"],
    kind: "Freelance", featured: true,
  },
  {
    title: "SynapseFlow",
    desc: "Solution d'automatisation qui unifie les données commerciales : workflows n8n, intégrations et dashboard analytics.",
    github: null, demo: null,
    tech: ["n8n", "Node.js", "Automation"],
    kind: "Freelance", featured: true,
  },
  {
    title: "Algos de tri",
    desc: "Comparaison d'algorithmes de tri et implémentation d'un algorithme hybride en C & Python.",
    github: "https://github.com/osama782rh/Sorting-Algo", demo: null,
    tech: ["C", "Python"], kind: "Académique",
  },
  {
    title: "Planit",
    desc: "Application mobile de gestion de tâches, calendrier et contacts. Flutter avec backend Firebase.",
    github: "https://github.com/osama782rh/Projet-Mobile", demo: null,
    tech: ["Flutter", "Firebase"], kind: "Académique",
  },
  {
    title: "Breast Cancer Diagnostic",
    desc: "Modèle TensorFlow pour le diagnostic de tumeurs bénignes/malignes avec data preprocessing avancé.",
    github: "https://github.com/osama782rh/BreastCancerDiagnostic", demo: null,
    tech: ["Python", "TensorFlow"], kind: "Académique",
  },
  {
    title: "Neige de l'Antarctique",
    desc: "Scène 3D Unity avec Shader Graph, tessellation et particules pour simuler neige et vent.",
    github: "https://github.com/osama782rh/Neige-de-l-Antarctique", demo: null,
    tech: ["Unity", "Shader Graph"], kind: "Académique",
  },
  {
    title: "Éco Système",
    desc: "Simulation C++ : loups, moutons, herbe — comportements, reproduction et survie.",
    github: "https://github.com/osama782rh/ProjetEcoSysteme", demo: null,
    tech: ["C++"], kind: "Académique",
  },
  {
    title: "Galactic VR",
    desc: "Scène VR Unity dans un vaisseau spatial avec interactions en réalité virtuelle.",
    github: "https://github.com/osama782rh/VR-Galactic", demo: null,
    tech: ["Unity", "VR"], kind: "Académique",
  },
  {
    title: "Stellaris Eval Bot",
    desc: "Robot en assembleur : déplacement, rotation et comportements bas niveau sur microcontrôleur.",
    github: "https://github.com/osama782rh/Robot-Stellaris", demo: null,
    tech: ["Assembleur"], kind: "Académique",
  },
];

const FILTERS = ["Tous", "Freelance", "Académique"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("Tous");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<Project | null>(null);

  const featured = PROJECTS.filter((p) => p.featured);
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return PROJECTS.filter((p) => {
      const matchFilter = filter === "Tous" || p.kind === filter;
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.tech.some(t => t.toLowerCase().includes(q));
      return matchFilter && matchSearch;
    });
  }, [filter, search]);

  // Horizontal scroll for featured
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">03</span>
            <div className="h-px flex-1 max-w-[60px] bg-primary" />
            <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Projets <span className="text-gradient-gold">sélectionnés</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Des SaaS IA aux simulations 3D, chaque projet est une preuve de ma rigueur et de ma créativité.
          </p>
        </SectionReveal>

        {/* Featured projects - large cards */}
        <div ref={scrollRef} className="mb-20">
          <motion.div style={{ x }} className="flex gap-6 pb-4">
            {featured.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.15}>
                <TiltCard tiltStrength={5} className="relative shrink-0 w-[340px] sm:w-[420px]">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="glass rounded-3xl p-8 h-full cursor-pointer group border border-border hover:border-primary/30 transition-all duration-700"
                    onClick={() => setActive(p)}
                  >
                    {/* Number */}
                    <span className="font-display text-7xl font-black text-foreground/[0.03] absolute top-4 right-6">
                      0{i + 1}
                    </span>

                    <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                      Freelance
                    </span>

                    <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                      {p.title}
                      <ArrowUpRight size={18} className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[11px] rounded-full bg-secondary text-secondary-foreground font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </TiltCard>
              </SectionReveal>
            ))}
          </motion.div>
        </div>

        {/* Filter toolbar */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-500 ${
                    filter === f
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                      : "glass text-muted-foreground hover:text-foreground hover:border-primary/20"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="relative flex-1 max-w-xs">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dim" />
              <input
                type="search"
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-full glass bg-transparent text-foreground placeholder:text-dim focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
          </div>
        </SectionReveal>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <div
                  className="glass rounded-2xl p-6 cursor-pointer group hover:border-primary/20 transition-all duration-500 h-full flex flex-col"
                  onClick={() => setActive(p)}
                >
                  {p.kind === "Freelance" && (
                    <span className="inline-block w-fit text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                      Freelance
                    </span>
                  )}
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {p.title}
                    <ArrowUpRight size={14} className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] rounded-full bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-dim mt-12 font-mono"
          >
            Aucun projet trouvé.
          </motion.p>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl p-8 md:p-10 max-w-lg w-full relative border border-primary/10"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>

              {active.kind === "Freelance" && (
                <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
                  Projet freelance
                </span>
              )}
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">{active.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{active.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {active.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {active.github && (
                  <MagneticButton strength={0.2}>
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-bold text-foreground hover:border-primary/30 transition-all"
                    >
                      <Github size={16} /> Code source
                    </a>
                  </MagneticButton>
                )}
                {active.demo && (
                  <MagneticButton strength={0.2}>
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-bold"
                    >
                      <ExternalLink size={16} /> Démo live
                    </a>
                  </MagneticButton>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
