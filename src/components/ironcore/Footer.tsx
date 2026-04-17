import { Logo } from "./Logo";
import { Instagram, Facebook, Whatsapp, Google, ArrowRight } from "./icons";

const services = ["Full Car Detail", "Ceramic Coating", "Paint Correction", "Interior Detailing", "PPF", "Engine Bay"];
const company = ["About Us", "Our Process", "Gallery", "Testimonials", "Career", "Contact"];

export const Footer = () => (
  <footer className="bg-background border-t border-bg-tertiary">
    <div className="container py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-5 font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
            Precision Detailing. Permanent Protection.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Whatsapp, Google].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-[13px] tracking-[0.2em] uppercase text-foreground">Services</h4>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s}><a href="#services" className="font-body text-[13px] text-text-muted hover:text-primary transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-[13px] tracking-[0.2em] uppercase text-foreground">Company</h4>
          <ul className="mt-5 space-y-2.5">
            {company.map((s) => (
              <li key={s}><a href="#about" className="font-body text-[13px] text-text-muted hover:text-primary transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-[13px] tracking-[0.2em] uppercase text-foreground">Contact</h4>
          <ul className="mt-5 space-y-2 font-body text-[13px] text-text-muted">
            <li>+91 98765 43210</li>
            <li>info@ironcoredetailing.com</li>
            <li>Whitefield, Bengaluru</li>
          </ul>
          <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 bg-primary hover:bg-primary-rust text-primary-foreground font-heading font-bold text-[12px] tracking-wider uppercase px-4 py-2 rounded-full transition-colors">
            Book Now <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-bg-tertiary">
      <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-[12px] text-text-muted/70">© 2025 IronCore Detailing. All Rights Reserved.</p>
        <div className="flex gap-4 font-body text-[12px] text-text-muted/70">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
