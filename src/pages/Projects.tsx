import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/ironcore/PageHero";
import { Section } from "@/components/ironcore/SectionHeader";
import { CtaBanner } from "@/components/ironcore/CtaBanner";
import { ArrowRight } from "@/components/ironcore/icons";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Category = "All" | "Ceramic" | "PPF" | "Paint Correction" | "Interior" | "Engine Bay";

const projects = [
  { id: 1, src: g1, title: "Ceramic Coat — BMW 5 Series", category: "Ceramic", location: "Bengaluru", year: 2024 },
  { id: 2, src: g2, title: "Full-body PPF — Sports Coupe", category: "PPF", location: "Whitefield", year: 2024 },
  { id: 3, src: g3, title: "Interior Restoration — Audi Q7", category: "Interior", location: "Indiranagar", year: 2024 },
  { id: 4, src: g4, title: "Paint Correction — Mercedes E-Class", category: "Paint Correction", location: "Koramangala", year: 2024 },
  { id: 5, src: g5, title: "Engine Bay Detail — Luxury Sedan", category: "Engine Bay", location: "HSR Layout", year: 2023 },
  { id: 6, src: g6, title: "PPF Application — Range Rover", category: "PPF", location: "Bengaluru", year: 2024 },
  { id: 7, src: g1, title: "Ceramic 9H — Porsche Cayenne", category: "Ceramic", location: "Whitefield", year: 2023 },
  { id: 8, src: g3, title: "Steam Clean — Toyota Innova", category: "Interior", location: "JP Nagar", year: 2023 },
  { id: 9, src: g4, title: "3-Stage Polish — Honda City", category: "Paint Correction", location: "Bengaluru", year: 2024 },
  { id: 10, src: g2, title: "Track-day PPF — Ford Mustang", category: "PPF", location: "Marathahalli", year: 2024 },
  { id: 11, src: g6, title: "Ceramic + PPF Combo — Volvo XC90", category: "Ceramic", location: "Bengaluru", year: 2023 },
  { id: 12, src: g5, title: "Engine Restoration — BMW M3", category: "Engine Bay", location: "Whitefield", year: 2024 },
];

const categories: Category[] = ["All", "Ceramic", "PPF", "Paint Correction", "Interior", "Engine Bay"];

const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const [visible, setVisible] = useState(9);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const shown = filtered.slice(0, visible);

  return (
    <>
      <PageHero
        title="PROJECTS"
        subtitle="A look inside our garage. 500+ vehicles transformed across Bengaluru — from daily drivers to weekend exotics."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <Section className="bg-background">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => { setActive(c); setVisible(9); }}
              className={`relative font-heading font-semibold text-[13px] tracking-wide uppercase px-5 py-2 rounded-full border transition-colors ${
                active === c ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden card-shadow-hover transition-colors hover:border-primary"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.src} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-heading font-bold text-white text-sm tracking-wider flex items-center gap-1">
                      VIEW PROJECT <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="font-mono-tech text-[10px] tracking-widest uppercase bg-primary/15 text-primary px-2 py-0.5 rounded">{p.category}</span>
                  <h3 className="mt-3 font-heading font-bold text-[18px] text-foreground leading-tight">{p.title}</h3>
                  <div className="mt-1 font-body text-[12px] text-muted-foreground">{p.location} · {p.year}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible < filtered.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisible((v) => v + 6)}
              className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-bold text-[14px] px-7 py-3 rounded-lg transition-colors"
            >
              Load More Projects
            </button>
          </div>
        )}
      </Section>

      <CtaBanner />
    </>
  );
};

export default Projects;
