import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./SectionHeader";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Whatsapp, ArrowRight } from "./icons";
import { toast } from "@/hooks/use-toast";

const inputCls =
  "w-full h-12 bg-bg-secondary border border-border-strong rounded-lg px-4 font-body text-[14px] text-foreground placeholder:text-text-muted input-dark transition-shadow outline-none";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", vehicle: "", service: "Premium Detail", date: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Booking received!", description: "Our team will reach out shortly to confirm." });
    setForm({ name: "", phone: "", email: "", vehicle: "", service: "Premium Detail", date: "", message: "" });
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <Section id="contact" className="bg-bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-body text-[11px] tracking-[0.3em] uppercase text-primary">— Contact —</div>
          <h2 className="mt-4 font-display text-4xl md:text-[52px] text-foreground leading-none">GET IN TOUCH</h2>
          <p className="mt-4 font-body text-muted-foreground leading-relaxed max-w-md">
            Ready to give your vehicle the IronCore treatment? Reach out — we'll respond within the hour during business times.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { Icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { Icon: Mail, label: "Email", value: "info@ironcoredetailing.com" },
              { Icon: MapPin, label: "Location", value: "Whitefield, Bengaluru, Karnataka 560066" },
              { Icon: Clock, label: "Hours", value: "Monday – Saturday: 8:00 AM – 7:00 PM" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-body text-[12px] tracking-widest uppercase text-text-muted">{label}</div>
                  <div className="font-body text-foreground mt-0.5">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-3">
            {[Instagram, Facebook, Whatsapp].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-11 h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary-rust transition-colors flex items-center justify-center"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-bg-tertiary border border-border rounded-2xl p-6 sm:p-8"
        >
          <h3 className="font-heading font-bold text-2xl text-foreground">Book a Service</h3>
          <p className="mt-1 font-body text-[13px] text-muted-foreground">Fill the form — we'll confirm your slot via call.</p>

          <div className="mt-6 space-y-4">
            <input required value={form.name} onChange={set("name")} placeholder="Full Name" className={inputCls} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required value={form.phone} onChange={set("phone")} placeholder="Phone Number" className={inputCls} />
              <input required type="email" value={form.email} onChange={set("email")} placeholder="Email" className={inputCls} />
            </div>
            <input value={form.vehicle} onChange={set("vehicle")} placeholder="Vehicle Make & Model" className={inputCls} />
            <select value={form.service} onChange={set("service")} className={inputCls}>
              <option>Essential</option>
              <option>Premium Detail</option>
              <option>IronCore Elite</option>
              <option>Custom</option>
            </select>
            <input type="date" value={form.date} onChange={set("date")} className={`${inputCls} text-muted-foreground`} />
            <textarea
              value={form.message}
              onChange={set("message")}
              placeholder="Tell us about your vehicle..."
              className={`${inputCls} h-28 py-3 resize-none`}
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-rust text-primary-foreground font-heading font-bold text-base py-3.5 rounded-lg transition-colors"
            >
              BOOK MY DETAIL <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
};
