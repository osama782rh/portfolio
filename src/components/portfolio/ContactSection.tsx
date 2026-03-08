import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";
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
      toast.success("Message envoyé !");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-foreground/50 font-mono text-sm tracking-widest uppercase">07</span>
            <div className="h-px flex-1 max-w-[60px] bg-foreground/30" />
            <span className="text-foreground/50 font-display font-semibold text-sm tracking-widest uppercase">Contact</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            Me <span className="text-gradient-silver">contacter</span>
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left */}
          <SectionReveal>
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                N'hésitez pas à me contacter pour toute question, opportunité ou collaboration.
              </p>

              {[
                { icon: Mail, label: "Email", value: "contact@osamarahim.dev", href: "mailto:contact@osamarahim.dev" },
                { icon: MapPin, label: "Localisation", value: "Paris, France", href: null },
                { icon: Github, label: "GitHub", value: "github.com/osama782rh", href: "https://github.com/osama782rh" },
                { icon: Linkedin, label: "LinkedIn", value: "osama-rahim", href: "https://linkedin.com/in/osama-rahim" },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-5 group cursor-default"
                >
                  <div className="p-4 rounded-2xl bg-foreground/5 text-foreground/50 group-hover:bg-foreground/8 transition-colors">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-dim uppercase tracking-[0.2em] font-bold">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/80 font-medium hover:text-foreground transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground/80 font-medium text-sm">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          {/* Right - Form */}
          <SectionReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Nom", type: "text" },
                { id: "email", label: "Email", type: "email" },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <motion.label
                    htmlFor={field.id}
                    animate={{
                      y: focused === field.id || form[field.id as keyof typeof form] ? -24 : 0,
                      scale: focused === field.id || form[field.id as keyof typeof form] ? 0.85 : 1,
                      color: focused === field.id ? "hsl(0 0% 93%)" : "hsl(0 0% 50%)",
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
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-foreground/30 outline-none transition-colors"
                  />
                </div>
              ))}

              <div className="relative">
                <motion.label
                  htmlFor="message"
                  animate={{
                    y: focused === "message" || form.message ? -24 : 0,
                    scale: focused === "message" || form.message ? 0.85 : 1,
                    color: focused === "message" ? "hsl(0 0% 93%)" : "hsl(0 0% 50%)",
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
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-foreground/30 outline-none transition-colors resize-none"
                />
              </div>

              <MagneticButton strength={0.15} className="pt-4">
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-display font-bold text-sm disabled:opacity-50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(0_0%_100%/0.08)]"
                >
                  <Send size={18} className="group-hover:rotate-12 transition-transform" />
                  {sending ? "Envoi en cours..." : "Envoyer"}
                </motion.button>
              </MagneticButton>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
