import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import MagneticButton from "./MagneticButton";
import MarqueeTicker from "./MarqueeTicker";

const FOOTER_TECHS = [
  "Java", "Python", "TypeScript", "React", "Next.js", "Docker", "Terraform",
  "Azure", "CI/CD", "Selenium", "Node.js", "PostgreSQL", "C++", "Flutter",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="py-6 border-b border-border opacity-60">
        <MarqueeTicker items={FOOTER_TECHS} speed={50} />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-display text-2xl font-bold mb-1">
              OR<span className="text-foreground/30">.</span>
            </div>
            <p className="text-sm text-dim">
              © {new Date().getFullYear()} Osama Rahim
            </p>
          </div>

          <div className="flex items-center gap-5">
            {[
              { icon: Github, href: "https://github.com/osama782rh", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/osama-rahim", label: "LinkedIn" },
              { icon: Mail, href: "mailto:contact@osamarahim.dev", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticButton key={label} strength={0.3}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full glass text-dim hover:text-foreground hover:border-foreground/10 transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              </MagneticButton>
            ))}
          </div>

          <MagneticButton strength={0.3}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-3 rounded-full glass text-dim hover:text-foreground hover:border-foreground/10 transition-all duration-500"
              aria-label="Retour en haut"
            >
              <ArrowUp size={18} />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
