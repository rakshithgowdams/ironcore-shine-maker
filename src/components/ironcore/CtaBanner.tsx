import { Link } from "react-router-dom";
import { ArrowRight } from "./icons";

export const CtaBanner = () => (
  <section className="bg-primary text-primary-foreground">
    <div className="container py-16 md:py-20 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="font-display text-[36px] md:text-[44px] leading-none">READY TO START YOUR DETAIL?</h2>
        <p className="mt-3 font-body text-base text-primary-foreground/90 max-w-md">
          Book a consultation today. Our certified team will design a package around your vehicle.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 md:justify-end">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-heading font-bold px-6 py-3 rounded-lg hover:-translate-y-0.5 transition-transform"
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground font-heading font-bold px-6 py-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors"
        >
          View Our Work
        </Link>
      </div>
    </div>
  </section>
);
