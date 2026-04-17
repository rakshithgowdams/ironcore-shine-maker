import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { Menu, Close, ArrowRight } from "./icons";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-bg-tertiary" : "bg-background/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container h-16 flex items-center justify-between">
        <a href="#top" aria-label="IronCore Detailing home">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-[13px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1.5 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-rust text-primary-foreground font-heading font-bold text-[15px] tracking-wide px-5 py-2.5 rounded-lg transition-colors"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <button
          className="lg:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-[100] lg:hidden flex flex-col"
              style={{ backgroundColor: "#0A0A0A" }}
            >
              <div className="container h-16 flex items-center justify-between border-b border-bg-tertiary">
                <Logo />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2 text-foreground">
                  <Close className="w-6 h-6" />
                </button>
              </div>
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
                className="flex-1 flex flex-col items-center justify-center gap-8"
              >
                {links.map((l) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="font-display text-5xl text-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-3 rounded-lg"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
  );
};
