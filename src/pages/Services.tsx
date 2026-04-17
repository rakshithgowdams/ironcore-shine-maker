import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/ironcore/PageHero";
import { Section, SectionHeader } from "@/components/ironcore/SectionHeader";
import { CtaBanner } from "@/components/ironcore/CtaBanner";
import {
  SprayCan, Shield, Sparkles, Sofa, Layers, Engine, Check, ArrowRight,
} from "@/components/ironcore/icons";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const detailedServices = [
  {
    num: "01",
    Icon: SprayCan,
    title: "Full Car Detail",
    image: g1,
    desc: "A complete inside-and-out reset. We strip every layer of grime, restore your paint's depth, and refresh the cabin to a near-showroom state.",
    capabilities: ["Exterior decontamination & wash", "Hand polish & sealant", "Interior steam clean", "Leather conditioning", "Tyre & trim dressing", "Glass clean — inside & out"],
  },
  {
    num: "02",
    Icon: Shield,
    title: "Ceramic Coating",
    image: g2,
    desc: "9H nano-ceramic protection that bonds to your paint. Hydrophobic, UV-resistant, and lasts up to 5 years with proper care.",
    capabilities: ["Paint correction prep", "Single or multi-layer ceramic", "9H surface hardness", "5-year written warranty", "Glass & wheel coating add-ons", "Annual maintenance program"],
  },
  {
    num: "03",
    Icon: Sparkles,
    title: "Paint Correction",
    image: g3,
    desc: "Multi-stage compound and polish to remove swirls, scratches, oxidation, and water spots. Bring back the depth and clarity of your finish.",
    capabilities: ["Paint depth measurement", "1, 2 or 3-stage correction", "Swirl & scratch removal", "Oxidation reversal", "Wet-sanding for deep defects", "Pre-coating prep"],
  },
];

const compactServices = [
  { Icon: Sofa, title: "Interior Detailing", desc: "Steam, extract, and condition every surface — from leather to headliner." },
  { Icon: Layers, title: "Paint Protection Film", desc: "Self-healing PPF on high-impact zones or full body for long-term defense." },
  { Icon: Engine, title: "Engine Bay Detailing", desc: "Safe degreasing and dressing of every engine surface for a clean, protected bay." },
];

const Services = () => (
  <>
    <PageHero
      title="OUR SERVICES"
      subtitle="A complete suite of premium detailing services, executed with precision and certified products."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
    />

    <Section className="bg-background">
      <SectionHeader
        eyebrow="What We Offer"
        title="DETAILING THAT GOES DEEPER"
        subtitle="Three flagship services and three specialized add-ons. Every job is custom-fitted to your vehicle's condition and your goals."
      />
    </Section>

    {/* Detailed alternating service blocks */}
    {detailedServices.map((s, i) => (
      <Section key={s.num} className={i % 2 === 0 ? "bg-bg-secondary" : "bg-background"}>
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3]"
          >
            <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono-tech text-primary text-sm">{s.num} / 03</div>
            <s.Icon className="mt-3 w-9 h-9 text-primary" />
            <h3 className="mt-4 font-display text-[36px] md:text-[44px] text-foreground leading-none">{s.title}</h3>
            <p className="mt-4 font-body text-muted-foreground leading-relaxed">{s.desc}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {s.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2 font-body text-[14px] text-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {c}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-primary font-heading font-bold text-[14px] tracking-wide hover:gap-3 transition-all"
            >
              Book {s.title} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </Section>
    ))}

    {/* Compact specialized services */}
    <Section className="bg-bg-secondary">
      <SectionHeader eyebrow="Add-ons" title="SPECIALIZED SERVICES" />
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {compactServices.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bg-card border border-border rounded-2xl p-7 transition-colors hover:border-primary card-shadow-hover"
          >
            <s.Icon className="w-8 h-8 text-primary" />
            <h3 className="mt-4 font-heading font-bold text-[20px] text-foreground">{s.title}</h3>
            <p className="mt-2 font-body text-[14px] text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* Products & certifications strip */}
    <Section className="bg-background">
      <SectionHeader eyebrow="Trusted Tools" title="PRODUCTS & CERTIFICATIONS" />
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {["Gtechniq", "3M", "Meguiar's", "XPEL", "SunTek", "Rupes", "Koch-Chemie", "IDA Certified"].map((p) => (
          <span
            key={p}
            className="font-heading font-semibold text-[13px] tracking-wide text-muted-foreground border border-border rounded-full px-5 py-2 hover:text-primary hover:border-primary transition-colors"
          >
            {p}
          </span>
        ))}
      </div>
    </Section>

    <CtaBanner />
  </>
);

export default Services;
