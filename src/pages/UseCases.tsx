import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

type Cat = "All" | "Exotic" | "Luxury" | "Daily Driver" | "Track" | "Restoration";

const cases = [
  {
    cat: "Luxury", img: g1,
    title: "BMW 5 Series — Concours-grade Ceramic",
    challenge: "A two-year-old BMW 5 Series with heavy water spotting and dealership-applied swirl marks across every panel. The owner wanted long-term protection without losing any depth.",
    solution: "Two-stage paint correction followed by a 3-layer Gtechniq Crystal Serum Ultra application. Wheels and glass coated separately for full-body protection.",
    stats: [["3 days", "Turnaround"], ["9H", "Hardness"], ["5 yrs", "Warranty"]],
  },
  {
    cat: "Track", img: g2,
    title: "Ford Mustang GT — Track-day PPF",
    challenge: "Owner was heading to Buddh International Circuit for a track weekend and wanted invisible rock-chip protection on the front end and rocker panels.",
    solution: "XPEL Ultimate Plus self-healing PPF on hood, fenders, bumper and rockers. Pre-cut patterns ensured zero edges visible.",
    stats: [["48 hrs", "Install"], ["10 yrs", "Warranty"], ["100%", "Edge-free"]],
  },
  {
    cat: "Exotic", img: g3,
    title: "Audi Q7 — Cabin Restoration",
    challenge: "Family SUV with three years of leather wear, headliner stains, and lingering odor that previous detailers couldn't eliminate.",
    solution: "Full interior strip, steam extraction on all upholstery, ozone treatment, and Leatherique conditioning. Headliner shampooed and re-treated.",
    stats: [["48 hrs", "Cabin time"], ["9 surfaces", "Restored"], ["Zero", "Odor"]],
  },
  {
    cat: "Daily Driver", img: g4,
    title: "Mercedes E-Class — Paint Revival",
    challenge: "5-year-old E-Class with deep oxidation on horizontal panels and clearcoat hazing visible under sunlight. Owner wanted to defer a respray.",
    solution: "Three-stage compound, polish and finish with Rupes Bigfoot system. Followed by a sealant base coat plus 2-year Gtechniq EXOv5 ceramic.",
    stats: [["3-stage", "Correction"], ["95%", "Defects removed"], ["2 yrs", "Protection"]],
  },
  {
    cat: "Restoration", img: g5,
    title: "Vintage Sedan — Engine Bay Refresh",
    challenge: "Restored vintage sedan with a clean exterior but a heavily oxidized, greasy engine bay that didn't match the show-quality of the rest of the car.",
    solution: "Safe degreasing with non-aggressive APC, careful steam treatment around electronics, plastic and rubber dressing, and a clear-coat preserver on metal surfaces.",
    stats: [["8 hrs", "Detail time"], ["100%", "Show-ready"], ["6 mo", "Protection"]],
  },
  {
    cat: "Exotic", img: g6,
    title: "Range Rover — Combo Package",
    challenge: "New-vehicle prep on a top-spec Range Rover Autobiography. Owner wanted absolute long-term protection from day one.",
    solution: "Full-body XPEL Stealth PPF combined with Gtechniq ceramic on top. Wheels removed for inner-barrel coating. Interior leather pre-treated with sealant.",
    stats: [["6 days", "Total project"], ["Full body", "PPF coverage"], ["10 yrs", "Combined warranty"]],
  },
];

const cats: Cat[] = ["All", "Exotic", "Luxury", "Daily Driver", "Track", "Restoration"];

const UseCases = () => {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.cat === active);

  return (
    <>
      <PageHero
        title="USE CASES"
        subtitle="Real projects, real numbers. Explore how IronCore solves different detailing challenges across vehicle types."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Use Cases" },
        ]}
      />

      <Section className="bg-background">
        <p className="font-body text-base text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
          From show-quality exotics to family daily drivers — every vehicle has a unique story. Here's how we approach the most common (and most challenging) detailing scenarios.
        </p>

        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative font-heading font-semibold text-[13px] tracking-wide uppercase px-5 py-2 rounded-full border transition-colors ${
                active === c ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.article
                key={c.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
                className="bg-card border border-border rounded-2xl overflow-hidden card-shadow-hover transition-colors hover:border-primary"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-7">
                  <span className="font-mono-tech text-[10px] tracking-widest uppercase bg-primary/15 text-primary px-2 py-0.5 rounded">{c.cat}</span>
                  <h3 className="mt-3 font-heading font-bold text-[22px] text-foreground leading-tight">{c.title}</h3>

                  <div className="mt-4">
                    <div className="font-heading font-bold text-[12px] tracking-widest uppercase text-primary">Challenge</div>
                    <p className="mt-1 font-body text-[14px] text-muted-foreground leading-relaxed">{c.challenge}</p>
                  </div>
                  <div className="mt-4">
                    <div className="font-heading font-bold text-[12px] tracking-widest uppercase text-primary">Solution</div>
                    <p className="mt-1 font-body text-[14px] text-muted-foreground leading-relaxed">{c.solution}</p>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                    {c.stats.map(([n, l]) => (
                      <div key={l} className="text-center">
                        <div className="font-display text-[28px] text-primary leading-none">{n}</div>
                        <div className="mt-1 font-body text-[11px] text-muted-foreground tracking-wide">{l}</div>
                      </div>
                    ))}
                  </div>

                  <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-primary font-heading font-bold text-[13px] tracking-wide hover:gap-2 transition-all">
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <CtaBanner />
    </>
  );
};

export default UseCases;
