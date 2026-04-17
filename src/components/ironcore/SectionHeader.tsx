import { motion } from "framer-motion";
import { ReactNode } from "react";

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
  >
    <div className="font-body text-[11px] tracking-[0.3em] uppercase text-primary">
      — {eyebrow} —
    </div>
    <h2 className="mt-4 font-display text-foreground text-4xl md:text-5xl lg:text-[56px] leading-none">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 font-body text-base text-muted-foreground leading-relaxed">{subtitle}</p>
    )}
  </motion.div>
);

export const Section = ({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container">{children}</div>
  </section>
);
