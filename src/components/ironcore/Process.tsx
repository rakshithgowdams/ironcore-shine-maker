import { motion } from "framer-motion";
import { Section, SectionHeader } from "./SectionHeader";
import { ArrowRight } from "./icons";

const steps = [
  { num: "01", title: "Inspection", desc: "We assess your vehicle's condition and recommend the right package." },
  { num: "02", title: "Preparation", desc: "Surface decontamination, clay bar treatment, panel wipe." },
  { num: "03", title: "Treatment", desc: "Application of your chosen service with precision tools." },
  { num: "04", title: "Delivery", desc: "Final inspection, walkthrough with client, care guide provided." },
];

export const Process = () => (
  <Section id="process" className="bg-background">
    <SectionHeader
      eyebrow="How It Works"
      title="OUR PROCESS"
      subtitle="A four-stage workflow refined over 500+ vehicles. Transparent, methodical, repeatable."
    />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 items-stretch"
    >
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center gap-4">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="relative flex-1 bg-bg-secondary border border-border rounded-2xl p-7 overflow-hidden min-h-[200px]"
          >
            <span className="absolute -bottom-4 -right-2 font-display text-[100px] text-bg-tertiary leading-none select-none pointer-events-none">
              {s.num}
            </span>
            <div className="relative">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold text-base">
                {s.num}
              </span>
              <h3 className="mt-5 font-heading font-bold text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 font-body text-[14px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
          {i < steps.length - 1 && (
            <ArrowRight className="hidden md:block w-6 h-6 text-primary shrink-0" />
          )}
        </div>
      ))}
    </motion.div>
  </Section>
);
