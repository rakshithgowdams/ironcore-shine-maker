import { motion } from "framer-motion";
import { Section, SectionHeader } from "./SectionHeader";
import { ArrowRight } from "./icons";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, label: "Ceramic Coating", car: "BMW 5 Series" },
  { src: g2, label: "Paint Protection", car: "Sports Coupe" },
  { src: g3, label: "Interior Detail", car: "Audi Q7" },
  { src: g4, label: "Paint Correction", car: "Mercedes E-Class" },
  { src: g5, label: "Engine Bay", car: "Luxury Sedan" },
  { src: g6, label: "PPF Application", car: "Range Rover" },
];

export const Gallery = () => (
  <Section id="gallery" className="bg-background">
    <SectionHeader
      eyebrow="Portfolio"
      title="OUR WORK"
      subtitle="Real cars. Real transformations. Hover any image to see the result."
    />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {photos.map((p, i) => (
        <motion.a
          key={p.src}
          href="#"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25 }}
          className="group relative block overflow-hidden rounded-2xl border border-border bg-bg-secondary"
        >
          <img
            src={p.src}
            alt={`${p.label} on ${p.car} by IronCore Detailing`}
            loading="lazy"
            width={800}
            height={640}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
            <div>
              <div className="font-body text-[10px] tracking-[0.3em] text-primary uppercase">{p.label}</div>
              <div className="font-heading font-bold text-foreground text-lg mt-1">{p.car}</div>
            </div>
            <span className="font-body text-[11px] tracking-[0.2em] text-primary border border-primary rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              VIEW
            </span>
          </div>
        </motion.a>
      ))}
    </motion.div>

    <div className="mt-10 text-center">
      <a
        href="#"
        className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary-light transition-colors"
      >
        See Full Gallery on Instagram <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </Section>
);
