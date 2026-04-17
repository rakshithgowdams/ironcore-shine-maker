import { motion } from "framer-motion";
import { PageHero } from "@/components/ironcore/PageHero";
import { Section, SectionHeader } from "@/components/ironcore/SectionHeader";
import { CtaBanner } from "@/components/ironcore/CtaBanner";
import { Star, Play, Google } from "@/components/ironcore/icons";

const reviews = [
  { name: "Rahul S.", company: "BMW X5 Owner", project: "Ceramic", quote: "The ceramic coat on my BMW X5 is absolutely flawless. Three months in and the water beading still looks brand new. IronCore's attention to detail is on another level entirely." },
  { name: "Priya M.", company: "Mercedes E-Class Owner", project: "Paint Correction", quote: "Finally a detailing service that actually delivers what they promise. My car looks better than the showroom — they removed years of swirl marks I'd given up on." },
  { name: "Kiran T.", company: "Audi Q7 Owner", project: "Elite Package", quote: "Booked the Elite package for my Audi Q7. The team was professional, punctual, and the results were stunning. Worth every rupee." },
  { name: "Aditya R.", company: "Honda City Owner", project: "Paint Correction", quote: "Paint correction removed 3 years of swirl marks in one session. Mind-blowing transformation. Their pricing is honest and the warranty is real." },
  { name: "Sneha V.", company: "Toyota Innova Owner", project: "Interior", quote: "Mobile service came to my office! Super convenient. The interior steam clean was worth every rupee. The cabin smells brand new." },
  { name: "Vikram J.", company: "Range Rover Owner", project: "PPF", quote: "Full-body PPF on my Range Rover. The film is invisible, self-healing, and the install was flawless. No bubbles, no edges showing." },
  { name: "Anita K.", company: "Porsche Cayenne Owner", project: "Ceramic", quote: "I'm extremely particular about my cars. IronCore exceeded every expectation — the prep work alone took two days. True craftsmen." },
  { name: "Rohan B.", company: "Ford Mustang Owner", project: "PPF", quote: "Track-ready PPF before a Buddh circuit weekend. Came back, peeled away the rock chips like nothing happened. Highly recommended." },
  { name: "Meera S.", company: "Volvo XC90 Owner", project: "Combo", quote: "Did the ceramic + PPF combo. Best decision I made for the car. The team explained every step, no upselling. Just honest expertise." },
];

const Testimonials = () => (
  <>
    <PageHero
      title="TESTIMONIALS"
      subtitle="What Bengaluru's car owners say after their IronCore detail. 100% verified, unedited."
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Testimonials" },
      ]}
    />

    {/* Rating summary */}
    <Section className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-2xl p-10 text-center max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 text-primary">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-6 h-6" />)}
        </div>
        <div className="mt-3 font-display text-[80px] text-primary leading-none">4.9</div>
        <div className="mt-3 font-body text-base text-muted-foreground">Based on 120+ verified client reviews</div>
        <div className="mt-6 flex justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2"><Google className="w-5 h-5" /><span className="font-body text-sm">Google · 4.9★</span></div>
          <div className="font-body text-sm">JustDial · 4.8★</div>
          <div className="font-body text-sm">UrbanClap · 5.0★</div>
        </div>
      </motion.div>
    </Section>

    {/* Reviews grid */}
    <Section className="bg-bg-secondary">
      <SectionHeader eyebrow="Client Voices" title="WHAT THEY'RE SAYING" />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="bg-card border border-border rounded-2xl p-7 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4" />)}
              </div>
              <span className="font-mono-tech text-[10px] tracking-widest uppercase bg-primary/15 text-primary px-2 py-0.5 rounded">{r.project}</span>
            </div>
            <p className="mt-5 font-body italic text-foreground leading-[1.8] text-[15px] flex-1">"{r.quote}"</p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <div className="w-11 h-11 rounded-full bg-primary/15 text-primary flex items-center justify-center font-heading font-bold text-sm">
                {r.name.split(" ").map((s) => s[0]).join("")}
              </div>
              <div>
                <div className="font-heading font-bold text-foreground">{r.name}</div>
                <div className="font-body text-[12px] text-muted-foreground">{r.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* Video placeholder */}
    <Section className="bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-bg-tertiary border border-border rounded-2xl aspect-[16/9] max-w-4xl mx-auto flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 dot-bg opacity-50" />
        <div className="relative text-center">
          {/* TODO: Replace with actual video embed */}
          <button
            aria-label="Play client video"
            className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform mx-auto"
          >
            <Play className="w-8 h-8 ml-1" />
          </button>
          <div className="mt-5 font-heading font-bold text-[18px] text-foreground tracking-wide">Watch Client Story</div>
          <div className="mt-1 font-body text-[13px] text-muted-foreground">Real owners. Real results.</div>
        </div>
      </motion.div>
    </Section>

    <CtaBanner />
  </>
);

export default Testimonials;
