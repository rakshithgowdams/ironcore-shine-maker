import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, Close, ArrowRight, ChevronDown } from "./icons";

type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Testimonials", to: "/about/testimonials" },
      { label: "Use Cases", to: "/about/use-cases" },
      { label: "News & Events", to: "/news-and-events" },
    ],
  },
  { label: "Contact", to: "/contact" },
  { label: "Career", to: "/career" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  const linkBase = "font-heading font-semibold text-[13px] uppercase tracking-[0.18em] transition-colors relative";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container h-16 lg:h-[72px] flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  className={`${linkBase} flex items-center gap-1 ${
                    location.pathname.startsWith("/about") || location.pathname === "/news-and-events"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[220px] bg-popover border border-border rounded-xl shadow-xl overflow-hidden"
                    >
                      {item.children.map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          className={({ isActive }) =>
                            `block px-5 py-3 font-body text-[13px] transition-colors ${
                              isActive
                                ? "text-primary bg-bg-tertiary"
                                : "text-muted-foreground hover:text-primary hover:bg-bg-tertiary"
                            }`
                          }
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-1.5 h-0.5 w-full bg-primary"
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-rust text-primary-foreground font-heading font-bold text-[14px] tracking-wide px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(var(--primary)/0.25)]"
          >
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-foreground p-2 -mr-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-[99] bg-black/60 lg:hidden"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-0 right-0 bottom-0 w-[88%] max-w-sm z-[100] lg:hidden flex flex-col bg-background border-l border-border"
              >
                <div className="container h-16 flex items-center justify-between border-b border-border">
                  <Logo />
                  <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2 text-foreground">
                    <Close className="w-6 h-6" />
                  </button>
                </div>
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
                  className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-2"
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                    >
                      {item.children ? (
                        <>
                          <button
                            onClick={() => setMobileAboutOpen((v) => !v)}
                            className="w-full flex items-center justify-between font-display text-3xl text-foreground hover:text-primary transition-colors py-2"
                          >
                            {item.label}
                            <ChevronDown className={`w-5 h-5 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {mobileAboutOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden ml-4 border-l-2 border-primary/30 pl-4"
                              >
                                {item.children.map((c) => (
                                  <NavLink
                                    key={c.to}
                                    to={c.to}
                                    className={({ isActive }) =>
                                      `block py-2 font-heading text-base ${
                                        isActive ? "text-primary" : "text-muted-foreground"
                                      }`
                                    }
                                  >
                                    {c.label}
                                  </NavLink>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <NavLink
                          to={item.to}
                          end={item.to === "/"}
                          className={({ isActive }) =>
                            `block font-display text-3xl py-2 transition-colors ${
                              isActive ? "text-primary" : "text-foreground hover:text-primary"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                    className="mt-8"
                  >
                    <Link
                      to="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-3.5 rounded-lg"
                    >
                      Book a Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </motion.nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
};
