import { motion } from "framer-motion";
import { Section, SectionHeader } from "./SectionHeader";
import { Check } from "./icons";

const tiers = [
  {
    name: "Essential",
    badge: "BASIC",
    price: "₹2,499",
    features: ["Exterior wash", "Hand dry", "Tyre dressing", "Interior vacuum", "Window clean"],
    featured: false,
  },
  {
    name: "Premium Detail",
    badge: "POPULAR",
    price: "₹5,999",
    features: ["Everything in Essential", "Clay bar treatment", "Compound polish", "Leather wipe-down", "Engine bay clean", "Tyre & trim dressing"],
    featured: true,
  },
  {
    name: "IronCore Elite",
    badge: "PREMIUM",
    price: "₹11,999",
    features: ["Everything in Premium", "9H ceramic coat", "PPF zone application", "6-month protection warranty", "Free 30-day follow-up"],
    featured: false,
  },
];

export const Pricing = () => (
  <Section className="bg-bg-secondary">
    <SectionHeader
      eyebrow="Transparent Pricing"
      title="DETAILING PACKAGES"
      subtitle="Three curated packages. Custom builds available on request — every quote is honest, every result is guaranteed."
    />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
    >
      {tiers.map((t) => (
        <motion.div
          key={t.name}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          className={`relative rounded-2xl p-8 flex flex-col ${
            t.featured
              ? "bg-bg-tertiary border-2 border-primary glow-orange md:scale-[1.02]"
              : "bg-bg-tertiary border border-border"
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`font-body text-[11px] tracking-[0.25em] px-3 py-1 rounded-full ${
                t.featured ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
              }`}
            >
              {t.badge}
            </span>
          </div>
          <h3 className="mt-6 font-display text-[36px] text-foreground leading-none">{t.name}</h3>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-mono-tech text-5xl text-primary font-bold">{t.price}</span>
            <span className="font-body text-[13px] text-muted-foreground">/ session</span>
          </div>
          <div className="mt-6 h-px bg-border" />
          <ul className="mt-6 space-y-3 flex-1">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-3 font-body text-[14px] text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={`mt-8 inline-flex items-center justify-center font-heading font-bold px-6 py-3 rounded-lg transition-colors ${
              t.featured
                ? "bg-primary hover:bg-primary-rust text-primary-foreground"
                : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            Choose {t.name}
          </a>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);
