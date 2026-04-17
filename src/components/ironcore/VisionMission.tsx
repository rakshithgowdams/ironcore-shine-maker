import { motion } from "framer-motion";
import { Section } from "./SectionHeader";
import { Eye, Zap } from "./icons";

const Panel = ({ Icon, label, headline, body, delay }: { Icon: any; label: string; headline: string; body: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className="px-6 md:px-10"
  >
    <Icon className="w-9 h-9 text-primary" />
    <div className="mt-5 font-heading font-bold text-[14px] tracking-[0.25em] uppercase text-primary">
      {label}
    </div>
    <h3 className="mt-3 font-display text-[36px] md:text-[40px] text-foreground leading-tight">
      {headline}
    </h3>
    <p className="mt-4 font-body text-[15px] text-muted-foreground leading-relaxed">{body}</p>
  </motion.div>
);

export const VisionMission = () => (
  <Section className="bg-background">
    <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-bg-tertiary">
      <Panel
        Icon={Eye}
        label="Our Vision"
        headline="TO BE INDIA'S MOST TRUSTED NAME IN AUTOMOTIVE PROTECTION."
        body="We envision a future where every car owner has access to professional-grade paint protection, regardless of their budget or location."
        delay={0}
      />
      <Panel
        Icon={Zap}
        label="Our Mission"
        headline="DELIVERING PERFECTION, ONE VEHICLE AT A TIME."
        body="Our mission is to combine premium products, certified technique, and genuine care for every vehicle we touch — building trust that lasts longer than any coating."
        delay={0.15}
      />
    </div>
  </Section>
);
