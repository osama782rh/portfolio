import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Search } from "lucide-react";
import SectionReveal from "./SectionReveal";

interface Project {
  title: string;
  desc: string;
  github: string | null;
  demo: string | null;
  tech: string[];
  kind: "Académique" | "Freelance";
}

const PROJECTS: Project[] = [
  {
    title: "WorkPilot.AI",
    desc: "Plateforme SaaS qui automatise la gestion quotidienne d'indépendants et de PME grâce à l'IA générative.",
    github: null,
    demo: null,
    tech: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Stripe", "AWS"],
    kind: "Freelance",
  },
  {
    title: "Taskin",
    desc: "Plateforme de mise en relation clients / professionnels, avec application mobile React Native et interface web responsive.",
    github: null,
    demo: null,
    tech: ["React Native", "TypeScript", "Expo", "React"],
    kind: "Freelance",
  },
  {
    title: "SynapseFlow",
    desc: "Solution d'automatisation qui unifie les données commerciales : workflows n8n, intégrations et dashboard analytics.",
    github: null,
    demo: null,
    tech: ["n8n", "Node.js", "Automation"],
    kind: "Freelance",
  },
  {
    title: "Algos de tri",
    desc: "Comparaison d'algorithmes de tri et implémentation d'un algorithme hybride en C & Python.",
    github: "https://github.com/osama782rh/Sorting-Algo",
    demo: null,
    tech: ["C", "Python"],
    kind: "Académique",
  },
  {
    title: "Planit",
    desc: "Application mobile de gestion de tâches, calendrier et contacts. Flutter avec backend Firebase.",
    github: "https://github.com/osama782rh/Projet-Mobile",
    demo: null,
    tech: ["Flutter", "Firebase"],
    kind: "Académique",
  },
  {
    title: "Breast Cancer",
    desc: "Modèle TensorFlow pour le diagnostic de tumeurs bénignes/malignes.",
    github: "https://github.com/osama782rh/BreastCancerDiagnostic",
    demo: null,
    tech: ["Python", "TensorFlow"],
    kind: "Académique",
  },
  {
    title: "Neige de l'Antarctique",
    desc: "Scène 3D Unity avec Shader Graph, tessellation et particules pour simuler neige et vent.",
    github: "https://github.com/osama782rh/Neige-de-l-Antarctique",
    demo: null,
    tech: ["Unity"],
    kind: "Académique",
  },
  {
    title: "Éco Système",
    desc: "Simulation C++ : loups, moutons, herbe — comportements, reproduction et survie.",
    github: "https://github.com/osama782rh/ProjetEcoSysteme",
    demo: null,
    tech: ["C++"],
    kind: "Académique",
  },
  {
    title: "Galactic VR",
    desc: "Scène VR Unity dans un vaisseau spatial avec interactions en réalité virtuelle.",
    github: "https://github.com/osama782rh/VR-Galactic",
    demo: null,
    tech: ["Unity"],
    kind: "Académique",
  },
  {
    title: "Stellaris Eval Bot",
    desc: "Robot en assembleur : déplacement, rotation et comportements bas niveau sur microcontrôleur.",
    github: "https://github.com/osama782rh/Robot-Stellaris",
    demo: null,
    tech: ["Assembleur"],
    kind: "Académique",
  },
];

const FILTERS = ["Tous", "Freelance", "Académique"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("Tous");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return PROJECTS.filter((p) => {
      const matchFilter = filter === "Tous" || p.kind === filter;
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.tech.some(t => t.toLowerCase().includes(q));
      return matchFilter && matchSearch;
    });
  }, [filter, search]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="line-accent mb-16" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Projets <span className="text-gradient-gold">sélectionnés</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            Des projets freelance ambitieux aux réalisations académiques, chaque projet reflète ma rigueur technique.
          </p>
        </SectionReveal>

        {/* Toolbar */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    filter === f
                      ? "bg-primary text-primary-foreground"
                      : "glass text-muted-foreground hover:text-foreground"
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
                className="w-full pl-9 pr-4 py-2 text-sm rounded-full glass bg-transparent text-foreground placeholder:text-dim focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
          </div>
        </SectionReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass glass-hover rounded-2xl p-6 flex flex-col cursor-pointer group"
                onClick={() => setActive(p)}
              >
                {p.kind === "Freelance" && (
                  <span className="inline-block w-fit text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
                    Freelance
                  </span>
                )}
                <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-secondary text-dim">
                      +{p.tech.length - 4}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-dim mt-12">Aucun projet trouvé.</p>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl p-8 max-w-lg w-full relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass text-muted-foreground hover:text-foreground"
              >
                <X size={18} />
              </button>

              {active.kind === "Freelance" && (
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-4">
                  Projet freelance
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{active.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{active.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {active.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full glass glass-hover text-sm font-medium text-foreground"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {active.demo && (
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                  >
                    <ExternalLink size={16} /> Démo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
