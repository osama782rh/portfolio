import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Send, Mail, MapPin, Briefcase } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message envoyé ! Je reviens vers vous rapidement.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="line-accent mb-16" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Travaillons <span className="text-gradient-gold">ensemble</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Disponible pour un CDI ou des missions freelance. N'hésitez pas à me contacter.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <SectionReveal>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "contact@osamarahim.dev" },
                { icon: MapPin, label: "Localisation", value: "Paris, France" },
                { icon: Briefcase, label: "Statut", value: "CDI / Freelance (SASU)" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-dim uppercase tracking-wider">{label}</p>
                    <p className="text-foreground font-medium">{value}</p>
                  </div>
                </div>
              ))}

              <div className="glass rounded-2xl p-6 mt-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  💡 Je suis particulièrement intéressé par des rôles en <span className="text-foreground font-medium">développement full stack</span>,{" "}
                  <span className="text-foreground font-medium">DevOps</span> et{" "}
                  <span className="text-foreground font-medium">ingénierie cloud Azure</span>.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Nom</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-dim focus:outline-none focus:ring-1 focus:ring-primary/50 transition"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-dim focus:outline-none focus:ring-1 focus:ring-primary/50 transition"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-dim focus:outline-none focus:ring-1 focus:ring-primary/50 transition resize-none"
                  placeholder="Décrivez votre projet ou besoin..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm disabled:opacity-50 transition-all hover:shadow-[var(--shadow-gold)]"
              >
                <Send size={16} />
                {sending ? "Envoi en cours..." : "Envoyer"}
              </motion.button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
