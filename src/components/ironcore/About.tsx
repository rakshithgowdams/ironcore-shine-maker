import { motion } from "framer-motion";
import { Section } from "./SectionHeader";
import { Check, ArrowRight } from "./icons";

const features = [
  "Certified Detailing Technicians",
  "3M & Gtechniq Products Only",
  "Fully Insured & Bonded",
  "Mobile Service Available",
];

const miniStats = [
  ["12+", "Products Used"],
  ["500+", "Happy Clients"],
  ["5★", "Average Rating"],
  ["48hr", "Turnaround"],
  ["100%", "Satisfaction"],
  ["0", "Compromises"],
];

export const About = () => (
  <Section id="about" className="bg-bg-secondary">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="font-body text-[11px] tracking-[0.3em] uppercase text-primary">— Why IronCore —</div>
        <h2 className="mt-4 font-display text-4xl md:text-[52px] text-foreground leading-none">
          BUILT ON PRECISION.<br />DRIVEN BY PASSION.
        </h2>
        <p className="mt-5 font-body text-muted-foreground leading-relaxed">
          IronCore is Bengaluru's premier automotive detailing studio. Our certified technicians use only ISO-grade products from 3M and Gtechniq to deliver showroom-quality results. Every detail is a commitment — no shortcuts, no compromises.
        </p>

        <ul className="mt-7 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 font-body text-foreground">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary">
                <Check className="w-3.5 h-3.5" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#process"
          className="mt-8 inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-bold px-6 py-2.5 rounded-lg transition-colors"
        >
          Our Process <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-bg-tertiary border border-border rounded-2xl p-8 grid grid-cols-3 gap-y-8 gap-x-4"
      >
        {miniStats.map(([num, label]) => (
          <div key={label} className="text-center">
            <div className="font-display text-4xl text-primary leading-none">{num}</div>
            <div className="mt-2 font-body text-[12px] text-muted-foreground tracking-wide">{label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </Section>
);
