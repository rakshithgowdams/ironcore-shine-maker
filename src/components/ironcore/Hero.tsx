import { motion } from "framer-motion";
import { ArrowRight } from "./icons";

export const Hero = () => (
  <section id="top" className="relative flex items-center overflow-hidden bg-background pt-[10px]">
    {/* Grid backdrop */}
    <div className="absolute inset-0 grid-bg opacity-60" />
    <div className="absolute inset-0 vignette" />
    {/* Subtle orange glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

    <div className="container relative z-10 pt-0 pb-12 text-center mx-0 px-0">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 border border-primary/40 text-primary rounded-full px-4 py-1 font-body text-[11px] tracking-[0.25em] uppercase"
      >
        ★ Premium Auto Detailing
      </motion.div>

      <h1 className="mt-8 font-display text-foreground leading-[0.95] text-[48px] sm:text-[72px] lg:text-[96px]">
        {["PROTECT YOUR", "VEHICLE'S", "LEGACY."].map((line, i) => (
          <motion.span
            key={line}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease: "easeOut" }}
            className={`block ${i === 2 ? "text-primary" : ""}`}
          >
            {line}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 max-w-xl mx-auto font-body text-base sm:text-lg text-muted-foreground leading-relaxed"
      >
        Professional-grade ceramic coating, paint correction & detailing services. Your car deserves IronCore precision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-rust text-primary-foreground font-heading font-bold px-8 py-3.5 rounded-lg transition-colors"
        >
          Book a Detail <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#gallery"
          className="inline-flex items-center gap-2 border border-foreground/80 hover:border-primary hover:text-primary text-foreground font-heading font-bold px-8 py-3.5 rounded-lg transition-colors"
        >
          View Our Work
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-body text-[13px] text-text-muted"
      >
        <span>★ 4.9 Google Rating</span>
        <span className="text-border-strong">·</span>
        <span>500+ Cars Detailed</span>
        <span className="text-border-strong">·</span>
        <span>Bengaluru's #1 Choice</span>
      </motion.div>
    </div>

  </section>
);
