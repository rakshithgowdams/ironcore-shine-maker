import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "./icons";

export const PageHero = ({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; to?: string }[];
}) => (
  <section className="relative bg-bg-tertiary border-b border-border overflow-hidden">
    <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
    <div className="container relative py-14 md:py-20 min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
      <motion.nav
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-1.5 font-body text-[12px] text-muted-foreground"
        aria-label="Breadcrumb"
      >
        {breadcrumbs.map((b, i) => (
          <span key={b.label} className="flex items-center gap-1.5">
            {b.to ? (
              <Link to={b.to} className="hover:text-primary transition-colors">{b.label}</Link>
            ) : (
              <span className="text-foreground">{b.label}</span>
            )}
            {i < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3 text-text-muted" />}
          </span>
        ))}
      </motion.nav>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 font-display text-foreground text-[40px] md:text-[56px] leading-none"
      >
        {title}
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-3 h-[3px] w-[60px] bg-primary origin-left"
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 font-body text-[15px] md:text-base text-muted-foreground max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);
