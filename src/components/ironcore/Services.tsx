import { motion } from "framer-motion";
import { Section, SectionHeader } from "./SectionHeader";
import { SprayCan, Shield, Sparkles, Sofa, Layers, Engine, ArrowRight } from "./icons";

const services = [
  { num: "01", Icon: SprayCan, title: "Full Car Detail", desc: "Interior + exterior deep clean, hand polish, tire dressing." },
  { num: "02", Icon: Shield,   title: "Ceramic Coating", desc: "Nano-ceramic 9H hardness, 5-year protection warranty." },
  { num: "03", Icon: Sparkles, title: "Paint Correction", desc: "Multi-stage compound, swirl & scratch elimination." },
  { num: "04", Icon: Sofa,     title: "Interior Detailing", desc: "Steam cleaning, leather conditioning, odor elimination." },
  { num: "05", Icon: Layers,   title: "Paint Protection Film", desc: "Self-healing PPF, full-body or zone coverage." },
  { num: "06", Icon: Engine,   title: "Engine Bay Detailing", desc: "Degreasing, detailing, protection of all engine surfaces." },
];

export const Services = () => (
  <Section id="services" className="bg-background">
    <SectionHeader
      eyebrow="What We Do"
      title="OUR SERVICES"
      subtitle="A complete suite of premium detailing services, executed with precision and certified products."
    />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map(({ num, Icon, title, desc }) => (
        <motion.div
          key={num}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="group relative bg-bg-secondary border border-border rounded-2xl p-8 transition-colors hover:border-primary hover:bg-[hsl(var(--bg-secondary))] card-shadow-hover overflow-hidden"
        >
          <span className="absolute top-4 right-6 font-display text-5xl text-foreground/10 select-none">
            {num}
          </span>
          <div className="text-foreground"><Icon className="w-8 h-8" /></div>
          <h3 className="mt-6 font-heading font-bold text-[22px] text-foreground tracking-wide">{title}</h3>
          <p className="mt-2 font-body text-[14px] text-muted-foreground leading-[1.7]">{desc}</p>
          <div className="mt-5 flex items-center gap-1.5 font-body text-[13px] text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            Learn More <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);
