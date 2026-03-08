import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} Osama Rahim — Tous droits réservés
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/osama782rh", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/osama-rahim", label: "LinkedIn" },
            { icon: Mail, href: "mailto:contact@osamarahim.dev", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full text-dim hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
