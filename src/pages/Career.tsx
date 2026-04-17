import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/ironcore/PageHero";
import { Section, SectionHeader } from "@/components/ironcore/SectionHeader";
import {
  ArrowRight, Plus, Briefcase, Lightbulb, Handshake, Upload, MapPin, Calendar,
} from "@/components/ironcore/icons";
import { toast } from "@/hooks/use-toast";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";

const culture = [
  { Icon: Lightbulb, title: "Growth", desc: "Continuous training, certifications, and exposure to the latest products." },
  { Icon: Handshake, title: "Collaboration", desc: "Tight-knit team. We learn from each other on every project." },
  { Icon: Briefcase, title: "Craftsmanship", desc: "Pride in the work. We celebrate process, not shortcuts." },
];

const jobs = [
  {
    title: "Senior Detailer — Ceramic Specialist",
    tags: ["FULL-TIME", "WHITEFIELD", "3–5 YRS"],
    department: "Detailing Operations",
    desc: "Lead ceramic coating projects on premium and exotic vehicles. Train junior detailers and own QA on every car that leaves the bay.",
    features: [
      "3+ years hands-on ceramic coating (Gtechniq, Ceramic Pro, or equivalent)",
      "Strong paint-correction fundamentals (3-stage minimum)",
      "Comfortable working with high-value exotic & luxury vehicles",
      "Manufacturer certification preferred (Gtechniq, IDA)",
    ],
    education: "ITI / Diploma in any trade · or equivalent professional experience",
    positions: "1 opening",
    industry: "Automotive Detailing",
    experience: "3–5 years",
  },
  {
    title: "PPF Installer",
    tags: ["FULL-TIME", "BENGALURU", "1–3 YRS"],
    department: "Installation",
    desc: "Install paint protection film on full-body and partial-coverage projects. Pre-cut pattern proficiency required.",
    features: [
      "1+ year XPEL, SunTek, or 3M PPF installation experience",
      "Pre-cut pattern software proficiency (XPEL DAP / SunTek pattern library)",
      "Wet & dry installation methods",
      "Edge-wrapping and self-healing film fundamentals",
    ],
    education: "Any 12th + Trade certification preferred",
    positions: "2 openings",
    industry: "Automotive Detailing",
    experience: "1–3 years",
  },
  {
    title: "Studio Manager",
    tags: ["FULL-TIME", "WHITEFIELD", "5+ YRS"],
    department: "Operations",
    desc: "Run day-to-day operations across our flagship studio. Own scheduling, client communication, and quality control.",
    features: [
      "5+ years in service-industry operations (automotive preferred)",
      "Client-facing experience with premium customers",
      "Comfort with scheduling tools, CRM, and basic finance",
      "Strong written & verbal English + Kannada/Hindi",
    ],
    education: "Bachelor's degree in any field",
    positions: "1 opening",
    industry: "Automotive Detailing",
    experience: "5+ years",
  },
];

const newsTeasers = [
  { month: "MAY", day: "18", title: "IronCore Cars & Coffee Meet", img: g1 },
  { month: "JUN", day: "08", title: "Detailing Masterclass — Beginners", img: g3 },
  { month: "MAR", day: "22", title: "Buddh Track-day PPF Workshop", img: g5 },
];

const inputCls =
  "w-full h-12 bg-background border border-input rounded-lg px-4 font-body text-[14px] text-foreground placeholder:text-muted-foreground input-dark transition-shadow outline-none";

const Career = () => {
  const [openJob, setOpenJob] = useState<number | null>(0);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", position: "Senior Detailer — Ceramic Specialist",
    referredBy: "", message: "", resume: "" as string | File,
  });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setForm({ ...form, resume: f });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email) {
      toast({ title: "Missing required fields", description: "Please fill out at least your name and email.", variant: "destructive" });
      return;
    }
    toast({ title: "Application received!", description: "We'll review and reach out within 5 business days." });
    setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", position: "Senior Detailer — Ceramic Specialist", referredBy: "", message: "", resume: "" });
  };

  return (
    <>
      <PageHero
        title="CAREER"
        subtitle="Join the team behind Bengaluru's most precise auto-detailing studio."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Career" }]}
      />

      {/* Join the team intro */}
      <Section className="bg-background">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="font-body text-[11px] tracking-[0.3em] uppercase text-primary">— Careers —</div>
            <h2 className="mt-3 font-display text-[40px] md:text-[52px] text-foreground leading-none">BUILD YOUR CAREER WITH US</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="font-body text-muted-foreground leading-relaxed">
              At IronCore, our craftspeople are the brand. We invest in training, provide certified products, and back our team with the tools they need to do the best work of their careers.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {culture.map((c) => (
                <div key={c.title} className="text-center sm:text-left">
                  <c.Icon className="w-7 h-7 text-primary mx-auto sm:mx-0" />
                  <div className="mt-2 font-heading font-bold text-foreground">{c.title}</div>
                  <div className="mt-1 font-body text-[13px] text-muted-foreground leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Open positions */}
      <Section className="bg-bg-secondary">
        <SectionHeader eyebrow="We're Hiring" title="OPEN POSITIONS" />
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {jobs.map((j, i) => {
            const open = openJob === i;
            return (
              <div key={j.title} className="bg-card border border-border rounded-2xl overflow-hidden transition-colors hover:border-primary">
                <button
                  onClick={() => setOpenJob(open ? null : i)}
                  className="w-full text-left p-6 md:p-7 flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-[20px] md:text-[22px] text-foreground">{j.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {j.tags.map((t) => (
                        <span key={t} className="font-mono-tech text-[10px] tracking-widest uppercase bg-bg-tertiary text-muted-foreground px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                    <div className="mt-2 font-body text-[13px] text-muted-foreground">{j.department}</div>
                  </div>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    className="shrink-0 w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-7 pb-7 border-t border-border">
                        <p className="mt-5 font-body text-[14px] text-muted-foreground leading-relaxed">{j.desc}</p>
                        <h4 className="mt-6 font-heading font-bold text-[13px] tracking-widest uppercase text-primary">Key Requirements</h4>
                        <ul className="mt-3 space-y-2">
                          {j.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 font-body text-[14px] text-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2 font-body text-[13px]">
                          <div><span className="text-muted-foreground">Education:</span> <span className="text-foreground">{j.education}</span></div>
                          <div><span className="text-muted-foreground">Positions:</span> <span className="text-foreground">{j.positions}</span></div>
                          <div><span className="text-muted-foreground">Industry:</span> <span className="text-foreground">{j.industry}</span></div>
                          <div><span className="text-muted-foreground">Experience:</span> <span className="text-foreground">{j.experience}</span></div>
                        </div>
                        <a
                          href="#apply"
                          onClick={() => setForm((f) => ({ ...f, position: j.title }))}
                          className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary hover:bg-primary-rust text-primary-foreground font-heading font-bold px-6 py-3 rounded-lg transition-colors"
                        >
                          APPLY FOR THIS ROLE <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Application form */}
      <Section className="bg-background" id="apply">
        <SectionHeader eyebrow="Submit Your Application" title="APPLY NOW" />
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-3xl mx-auto bg-card border border-border rounded-2xl p-7 md:p-9 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input value={form.firstName} onChange={set("firstName")} placeholder="First Name *" required className={inputCls} />
            <input value={form.lastName} onChange={set("lastName")} placeholder="Last Name" className={inputCls} />
          </div>
          <input type="email" value={form.email} onChange={set("email")} placeholder="Email Address *" required className={inputCls} />
          <input value={form.phone} onChange={set("phone")} placeholder="Phone Number" className={inputCls} />
          <input value={form.company} onChange={set("company")} placeholder="Current Employer" className={inputCls} />
          <select value={form.position} onChange={set("position")} className={inputCls}>
            {jobs.map((j) => <option key={j.title}>{j.title}</option>)}
            <option>Other</option>
          </select>
          <input value={form.referredBy} onChange={set("referredBy")} placeholder="Referred By (optional)" className={inputCls} />
          <textarea value={form.message} onChange={set("message")} placeholder="Cover Letter / Tell us about yourself" rows={5} className={`${inputCls} h-36 py-3 resize-none`} />

          {/* Resume upload */}
          <label className="block cursor-pointer border-2 border-dashed border-primary/40 hover:border-primary rounded-xl p-6 text-center transition-colors">
            <input type="file" accept=".pdf,.doc,.docx" onChange={onFile} className="hidden" />
            <Upload className="w-7 h-7 text-primary mx-auto" />
            <div className="mt-2 font-heading font-bold text-foreground">
              {form.resume instanceof File ? form.resume.name : "Drop your resume here or click to browse"}
            </div>
            <div className="mt-1 font-body text-[12px] text-muted-foreground">PDF, DOC, DOCX — up to 5MB</div>
          </label>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-rust text-primary-foreground font-heading font-bold text-base py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(var(--primary)/0.25)]"
          >
            SUBMIT APPLICATION <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>
      </Section>

      {/* News teasers */}
      <Section className="bg-bg-secondary">
        <SectionHeader eyebrow="Stay Connected" title="COMPANY NEWS & EVENTS" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {newsTeasers.map((n) => (
            <div key={n.title} className="relative bg-card border border-border rounded-2xl overflow-hidden card-shadow-hover transition-colors hover:border-primary group">
              <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground rounded-lg px-3 py-1.5 text-center">
                <div className="font-heading font-bold text-[10px] tracking-widest leading-none">{n.month}</div>
                <div className="font-display text-xl leading-none mt-0.5">{n.day}</div>
              </div>
              <div className="aspect-[16/9] overflow-hidden">
                <img src={n.img} alt={n.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-[16px] text-foreground leading-tight">{n.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/news-and-events"
            className="inline-flex items-center gap-2 text-primary font-heading font-bold text-[14px] tracking-wide hover:gap-3 transition-all"
          >
            View All News & Events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Career;
