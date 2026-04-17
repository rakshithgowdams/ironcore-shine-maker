import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ironcore/PageHero";
import { Section } from "@/components/ironcore/SectionHeader";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "@/components/ironcore/icons";
import { toast } from "@/hooks/use-toast";

const offices = [
  { name: "Whitefield Studio (Flagship)", address: "12, ITPL Main Road, Whitefield, Bengaluru — 560066" },
  { name: "Indiranagar Express Bay", address: "100ft Road, Indiranagar, Bengaluru — 560038" },
  { name: "Mobile Service Unit", address: "Greater Bengaluru — at your home or office" },
  { name: "Mysore Detail Outpost", address: "Vijayanagar, Mysuru — 570017" },
];

const inputCls =
  "w-full h-12 bg-background border border-input rounded-lg px-4 font-body text-[14px] text-foreground placeholder:text-muted-foreground input-dark transition-shadow outline-none";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    setErrors({ ...errors, [k]: "" });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    toast({ title: "Message sent!", description: "We'll be in touch within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <PageHero
        title="CONTACT US"
        subtitle="Ready to give your vehicle the IronCore treatment? We typically respond within the hour."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <Section className="bg-background">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-14">
          {/* Left — info + offices + map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-body text-[11px] tracking-[0.3em] uppercase text-primary">— Get in Touch —</div>
            <h2 className="mt-3 font-display text-[40px] md:text-[48px] text-foreground leading-none">REACH IRONCORE</h2>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { Icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                { Icon: Mail, label: "Email", value: "info@ironcoredetailing.com", href: "mailto:info@ironcoredetailing.com" },
                { Icon: MapPin, label: "Studio", value: "Whitefield, Bengaluru" },
                { Icon: Clock, label: "Hours", value: "Mon–Sat: 8AM–7PM" },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href ?? "#"}
                  className="flex items-start gap-4 group"
                >
                  <span className="w-11 h-11 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="font-body text-[12px] tracking-widest uppercase text-text-muted">{label}</div>
                    <div className="font-body text-foreground mt-0.5 group-hover:text-primary transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Offices */}
            <div className="mt-10 space-y-3">
              {offices.map((o) => (
                <div key={o.name} className="bg-card border border-border rounded-xl p-5">
                  <div className="font-heading font-bold text-[15px] text-primary">{o.name}</div>
                  <div className="mt-1 font-body text-[13px] text-muted-foreground leading-relaxed">{o.address}</div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener"
                    className="mt-2 inline-flex items-center gap-1.5 text-primary font-heading font-bold text-[12px] hover:gap-2 transition-all"
                  >
                    View on Map <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-bg-tertiary border border-border rounded-2xl aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 dot-bg opacity-50" />
              {/* TODO: Embed Google Maps iframe */}
              <MapPin className="w-12 h-12 text-primary relative" />
              <div className="mt-3 font-heading font-bold text-foreground tracking-wide relative">Interactive Map</div>
              <div className="mt-1 font-body text-[12px] text-muted-foreground relative">Coming soon</div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-7 md:p-8 self-start"
          >
            <h3 className="font-heading font-bold text-[24px] text-foreground">SEND A MESSAGE</h3>
            <p className="mt-1 font-body text-[13px] text-muted-foreground">We typically respond within 24 hours.</p>

            <div className="mt-6 space-y-4">
              <div>
                <input
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your Name *"
                  className={`${inputCls} ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="mt-1 text-[12px] text-destructive">{errors.name}</p>}
              </div>
              <div>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Your Message *"
                  rows={5}
                  className={`${inputCls} h-32 py-3 resize-none ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="mt-1 text-[12px] text-destructive">{errors.message}</p>}
              </div>
              <div>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="Email Address *"
                  className={`${inputCls} ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && <p className="mt-1 text-[12px] text-destructive">{errors.email}</p>}
              </div>
              <input
                value={form.phone}
                onChange={set("phone")}
                placeholder="Phone Number"
                className={inputCls}
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-rust text-primary-foreground font-heading font-bold text-base py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(var(--primary)/0.25)]"
              >
                SEND MESSAGE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
