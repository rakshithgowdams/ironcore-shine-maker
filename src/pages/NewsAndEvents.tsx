import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/ironcore/PageHero";
import { Section } from "@/components/ironcore/SectionHeader";
import { CtaBanner } from "@/components/ironcore/CtaBanner";
import { ArrowRight, MapPin, Close } from "@/components/ironcore/icons";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Tab = "events" | "studio";

const events = [
  { month: "MAY", day: "18", title: "IronCore Cars & Coffee Meet", location: "Whitefield, Bengaluru", date: "May 18, 2025", desc: "Monthly enthusiast meetup at our flagship studio. Free PPF spot inspections and live ceramic demos.", status: "UPCOMING", img: g1 },
  { month: "JUN", day: "08", title: "Detailing Masterclass — Beginners", location: "IronCore Studio", date: "June 8, 2025", desc: "A half-day hands-on workshop for car owners who want to learn proper wash and maintenance technique.", status: "UPCOMING", img: g3 },
  { month: "MAR", day: "22", title: "Buddh Track-day PPF Workshop", location: "Buddh International Circuit", date: "March 22, 2025", desc: "Our team installed track-ready protection film for 12 enthusiasts before a competitive lapping session.", status: "COMPLETED", img: g2 },
  { month: "FEB", day: "10", title: "Ceramic Coatings Symposium 2025", location: "ITPL Auditorium", date: "February 10, 2025", desc: "Industry-wide event covering the latest advances in nano-ceramic chemistry and application standards.", status: "COMPLETED", img: g4 },
];

const studioPhotos = [g1, g2, g3, g4, g5, g6, g3, g1, g5];

const NewsAndEvents = () => {
  const [tab, setTab] = useState<Tab>("events");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <PageHero
        title="NEWS & EVENTS"
        subtitle="Cars & Coffee meets, workshops, and a peek inside our studio."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "News & Events" }]}
      />

      <Section className="bg-background">
        {/* Tabs */}
        <div className="flex gap-8 border-b border-border justify-center">
          {(["events", "studio"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative pb-4 font-heading font-bold text-[14px] tracking-widest uppercase transition-colors ${
                tab === t ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "events" ? "Events" : "Studio"}
              {tab === t && (
                <motion.span
                  layoutId="news-tab-underline"
                  className="absolute left-0 right-0 -bottom-px h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "events" ? (
            <motion.div
              key="events"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-12 grid md:grid-cols-2 gap-6"
            >
              {events.map((e, i) => (
                <motion.article
                  key={e.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                  className="relative bg-card border border-border rounded-2xl overflow-hidden card-shadow-hover transition-colors hover:border-primary group"
                >
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground rounded-lg px-3 py-1.5 text-center shadow-lg">
                    <div className="font-heading font-bold text-[11px] tracking-widest leading-none">{e.month}</div>
                    <div className="font-display text-2xl leading-none mt-0.5">{e.day}</div>
                  </div>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={e.img} alt={e.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className={`font-mono-tech text-[10px] tracking-widest uppercase px-2 py-0.5 rounded ${
                      e.status === "UPCOMING" ? "bg-primary/15 text-primary" : "bg-bg-tertiary text-muted-foreground"
                    }`}>
                      {e.status}
                    </span>
                    <h3 className="mt-3 font-heading font-bold text-[20px] text-foreground leading-tight">{e.title}</h3>
                    <div className="mt-2 flex items-center gap-1.5 font-body text-[13px] text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" /> {e.location} · {e.date}
                    </div>
                    <p className="mt-3 font-body text-[14px] text-muted-foreground leading-relaxed">{e.desc}</p>
                    <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-primary font-heading font-bold text-[13px] hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="studio"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"
            >
              {studioPhotos.map((src, i) => (
                <motion.button
                  key={i}
                  onClick={() => setLightbox(src)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                  className="group relative block w-full mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-border"
                >
                  <img src={src} alt={`Studio photo ${i + 1}`} loading="lazy" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center"
            >
              <Close className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Studio"
              className="max-w-full max-h-full rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CtaBanner />
    </>
  );
};

export default NewsAndEvents;
