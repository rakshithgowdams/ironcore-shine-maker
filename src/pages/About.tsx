import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/ironcore/PageHero";
import { Section, SectionHeader } from "@/components/ironcore/SectionHeader";
import { Stats } from "@/components/ironcore/Stats";
import { CtaBanner } from "@/components/ironcore/CtaBanner";
import {
  Crosshair, Handshake, Lightbulb, Shield, Linkedin, MapPin, ArrowRight,
} from "@/components/ironcore/icons";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";

const values = [
  { Icon: Crosshair, title: "Precision", desc: "Every detail matters. We deliver showroom results with zero compromise on craft or finish." },
  { Icon: Handshake, title: "Partnership", desc: "We treat your vehicle like our own — building long-term relationships with every client we serve." },
  { Icon: Lightbulb, title: "Innovation", desc: "Latest ceramic chemistry, polishing tech, and PPF films. We invest in our craft, year after year." },
  { Icon: Shield, title: "Reliability", desc: "On-time delivery, transparent pricing, and a written warranty on every coating we apply." },
];

const team = [
  { name: "Arjun Reddy", role: "Founder & Master Detailer", img: g1 },
  { name: "Vikram Shah", role: "Head of Paint Correction", img: g3 },
  { name: "Neha Iyer", role: "Studio Manager", img: g5 },
];

const offices = [
  { name: "Whitefield Studio", address: "12, ITPL Main Road, Whitefield, Bengaluru — 560066", phone: "+91 98765 43210" },
  { name: "Indiranagar Express Bay", address: "100ft Road, Indiranagar, Bengaluru — 560038", phone: "+91 98765 43211" },
  { name: "Mobile Service Unit", address: "Greater Bengaluru — at your home or office", phone: "+91 98765 43212" },
];

const About = () => (
  <>
    <PageHero
      title="ABOUT US"
      subtitle="Built by car enthusiasts. Trusted by Bengaluru's most discerning owners."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
    />

    {/* Story section */}
    <Section className="bg-background">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative h-[420px] sm:h-[500px]"
        >
          <img src={g1} alt="IronCore studio" loading="lazy" className="absolute top-0 left-0 w-[75%] aspect-[3/4] object-cover rounded-2xl border border-border" />
          <img src={g3} alt="Detail in progress" loading="lazy" className="absolute bottom-0 right-0 w-[60%] aspect-square object-cover rounded-2xl border-4 border-background" />
          <div className="absolute -bottom-4 left-0 h-1 w-16 bg-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-body text-[11px] tracking-[0.3em] uppercase text-primary">— Who We Are —</div>
          <h2 className="mt-4 font-display text-[40px] md:text-[48px] text-foreground leading-none">
            COMMITTED TO EXCELLENCE IN EVERY VEHICLE
          </h2>
          <p className="mt-5 font-body text-muted-foreground leading-relaxed">
            IronCore Detailing started in 2020 in a single-bay garage with one goal: bring world-class detailing standards to Bengaluru. Five years later, we've coated, corrected and protected over 500 vehicles — from daily-driven hatchbacks to GT3-spec exotics.
          </p>
          <p className="mt-4 font-body text-muted-foreground leading-relaxed">
            We don't believe in shortcuts. Every job follows a documented process, every product is certified, and every coating ships with a written warranty. Our clients return because we treat their cars the way we treat our own.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 border border-primary text-primary font-heading font-bold text-[12px] tracking-widest uppercase px-4 py-2 rounded-full">
            ✦ Established 2020
          </div>

          <div className="mt-8 flex gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-rust text-primary-foreground font-heading font-bold px-6 py-3 rounded-lg transition-colors">
              View Our Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-foreground/30 hover:border-primary hover:text-primary text-foreground font-heading font-bold px-6 py-3 rounded-lg transition-colors">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>

    {/* Values */}
    <Section className="bg-bg-secondary">
      <SectionHeader eyebrow="Our Values" title="WHAT WE STAND FOR" />
      <div className="mt-14 grid sm:grid-cols-2 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card border border-border rounded-2xl p-7"
          >
            <v.Icon className="w-8 h-8 text-primary" />
            <h3 className="mt-4 font-heading font-bold text-[20px] text-foreground">{v.title}</h3>
            <p className="mt-2 font-body text-[14px] text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* Team */}
    <Section className="bg-background">
      <SectionHeader eyebrow="The Team" title="OUR LEADERSHIP" />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl overflow-hidden card-shadow-hover transition-colors hover:border-primary"
          >
            <div className="aspect-square overflow-hidden">
              <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="h-1 bg-primary" />
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-[20px] text-foreground">{m.name}</h3>
                <div className="font-body text-[13px] text-muted-foreground mt-0.5">{m.role}</div>
              </div>
              <a href="#" aria-label={`${m.name} LinkedIn`} className="text-primary hover:text-primary-rust">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    <Stats />

    {/* Locations */}
    <Section className="bg-background">
      <SectionHeader eyebrow="Find Us" title="OUR LOCATIONS" />
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {offices.map((o, i) => (
          <motion.div
            key={o.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-7"
          >
            <MapPin className="w-7 h-7 text-primary" />
            <h3 className="mt-4 font-heading font-bold text-[18px] text-foreground">{o.name}</h3>
            <p className="mt-2 font-body text-[14px] text-muted-foreground leading-relaxed">{o.address}</p>
            <div className="mt-3 font-body text-[14px] text-foreground">{o.phone}</div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1.5 text-primary font-heading font-bold text-[13px] hover:gap-2 transition-all"
            >
              View on Map <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>

    <CtaBanner />
  </>
);

export default About;
