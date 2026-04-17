import { motion } from "framer-motion";
import { Section, SectionHeader } from "./SectionHeader";
import { ArrowRight } from "./icons";

// TODO: Replace with actual detailing photos from IronCore portfolio
const photos = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/seed/ironcore-${i}/800/600`);

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
      {photos.map((src, i) => (
        <motion.a
          key={src}
          href="#"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25 }}
          className={`group relative block overflow-hidden rounded-2xl border border-border ${
            i % 5 === 0 ? "sm:col-span-2 lg:col-span-1" : ""
          }`}
        >
          {/* TODO: Replace placeholder with real photo */}
          <img src={src} alt={`IronCore detailing project ${i + 1}`} loading="lazy" className="w-full h-72 object-cover" />
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
            <span className="font-display text-2xl text-foreground">Before / After</span>
            <span className="font-body text-[11px] tracking-[0.3em] text-primary border border-primary rounded-full px-3 py-1">VIEW</span>
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
