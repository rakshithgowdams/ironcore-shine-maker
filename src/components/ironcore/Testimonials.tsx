import { useRef } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./SectionHeader";
import { Star, ChevronLeft, ChevronRight, Google } from "./icons";

const testimonials = [
  { name: "Rahul S.", initials: "RS", text: "The ceramic coat on my BMW X5 is absolutely flawless. IronCore's attention to detail is on another level." },
  { name: "Priya M.", initials: "PM", text: "Finally a detailing service that actually delivers what they promise. My car looks better than the showroom." },
  { name: "Kiran T.", initials: "KT", text: "Booked the Elite package for my Audi Q7. The team was professional, punctual, and the results were stunning." },
  { name: "Aditya R.", initials: "AR", text: "Paint correction removed 3 years of swirl marks in one session. Mind-blowing transformation." },
  { name: "Sneha V.", initials: "SV", text: "Mobile service came to my office! Super convenient. The interior steam clean was worth every rupee." },
];

export const Testimonials = () => {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const w = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <Section className="bg-bg-secondary">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="WHAT CLIENTS SAY"
          subtitle="Verified reviews from car owners across Bengaluru."
          align="left"
        />
        <div className="flex gap-3">
          <button onClick={() => scroll(-1)} aria-label="Previous" className="w-11 h-11 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll(1)} aria-label="Next" className="w-11 h-11 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <motion.div
        ref={scroller}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex gap-6 overflow-x-auto scroll-snap-x no-scrollbar pb-2 -mx-6 px-6"
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            data-card
            className="shrink-0 w-[88%] sm:w-[420px] bg-bg-tertiary border border-border rounded-2xl p-8"
          >
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4" />)}
            </div>
            <p className="mt-5 font-body italic text-foreground leading-[1.8] text-[16px]">"{t.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary/15 text-primary flex items-center justify-center font-heading font-bold text-sm">
                {t.initials}
              </div>
              <div className="flex-1">
                <div className="font-heading font-semibold text-foreground text-base">{t.name}</div>
                <div className="font-body text-[12px] text-text-muted">Verified Client · Bengaluru</div>
              </div>
              <div className="flex items-center gap-1.5 text-text-muted">
                <Google className="w-4 h-4" />
                <span className="font-body text-[11px]">Google</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
};
