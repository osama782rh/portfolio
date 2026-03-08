import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import { Send, Mail, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

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
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">07</span>
            <div className="h-px flex-1 max-w-[60px] bg-primary" />
            <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Contact</span>
          </div>
        </SectionReveal>

        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-16">
              Un projet en tête<span className="text-primary">?</span><br />
              <span className="text-gradient-gold">Parlons-en.</span>
            </h2>
          </SectionReveal>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <SectionReveal>
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "contact@osamarahim.dev", href: "mailto:contact@osamarahim.dev" },
                  { icon: MapPin, label: "Localisation", value: "Paris, France", href: null },
                  { icon: Briefcase, label: "Statut", value: "CDI / Freelance (SASU)", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-5 group cursor-default"
                  >
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] text-dim uppercase tracking-[0.2em] font-bold">{label}</p>
                      {href ? (
                        <a href={href} className="text-foreground font-medium hover:text-primary transition-colors">
                          {value} <ArrowUpRight size={14} className="inline" />
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                <div className="glass rounded-2xl p-6 mt-8">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    💡 Particulièrement intéressé par des rôles en{" "}
                    <span className="text-primary font-semibold">développement full stack</span>,{" "}
                    <span className="text-primary font-semibold">DevOps</span> et{" "}
                    <span className="text-primary font-semibold">ingénierie cloud Azure</span>.
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Right - Form */}
            <SectionReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Nom", type: "text", placeholder: "Votre nom" },
                  { id: "email", label: "Email", type: "email", placeholder: "votre@email.com" },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <motion.label
                      htmlFor={field.id}
                      animate={{
                        y: focused === field.id || form[field.id as keyof typeof form] ? -24 : 0,
                        scale: focused === field.id || form[field.id as keyof typeof form] ? 0.85 : 1,
                        color: focused === field.id ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                      }}
                      className="absolute left-0 top-3 text-sm font-medium origin-left pointer-events-none"
                    >
                      {field.label}
                    </motion.label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary outline-none transition-colors"
                    />
                  </div>
                ))}

                <div className="relative">
                  <motion.label
                    htmlFor="message"
                    animate={{
                      y: focused === "message" || form.message ? -24 : 0,
                      scale: focused === "message" || form.message ? 0.85 : 1,
                      color: focused === "message" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                    }}
                    className="absolute left-0 top-3 text-sm font-medium origin-left pointer-events-none"
                  >
                    Message
                  </motion.label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary outline-none transition-colors resize-none"
                  />
                </div>

                <MagneticButton strength={0.15} className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm disabled:opacity-50 transition-all duration-500 hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)]"
                  >
                    <Send size={18} className="group-hover:rotate-12 transition-transform" />
                    {sending ? "Envoi en cours..." : "Envoyer le message"}
                  </motion.button>
                </MagneticButton>
              </form>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
