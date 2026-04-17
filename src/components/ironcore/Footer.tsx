import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Instagram, Facebook, Whatsapp, Linkedin, Twitter, ArrowRight } from "./icons";

const services = [
  { label: "Full Car Detail", to: "/services" },
  { label: "Ceramic Coating", to: "/services" },
  { label: "Paint Correction", to: "/services" },
  { label: "Interior Detailing", to: "/services" },
  { label: "Paint Protection Film", to: "/services" },
  { label: "Engine Bay Detail", to: "/services" },
];
const company = [
  { label: "About Us", to: "/about" },
  { label: "Testimonials", to: "/about/testimonials" },
  { label: "Use Cases", to: "/about/use-cases" },
  { label: "News & Events", to: "/news-and-events" },
  { label: "Career", to: "/career" },
  { label: "Contact Us", to: "/contact" },
];

export const Footer = () => (
  <footer className="footer-dark border-t border-border">
    <div className="container py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-5 font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
            Precision Detailing. Permanent Protection. Bengaluru's #1 trusted automotive studio.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Whatsapp, label: "WhatsApp" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "Twitter" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors flex items-center justify-center"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-[12px] tracking-[0.2em] uppercase text-primary">Services</h4>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.label}>
                <Link to={s.to} className="font-body text-[13px] text-muted-foreground hover:text-primary transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-[12px] tracking-[0.2em] uppercase text-primary">Company</h4>
          <ul className="mt-5 space-y-2.5">
            {company.map((s) => (
              <li key={s.label}>
                <Link to={s.to} className="font-body text-[13px] text-muted-foreground hover:text-primary transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-[12px] tracking-[0.2em] uppercase text-primary">Contact</h4>
          <ul className="mt-5 space-y-2 font-body text-[13px] text-muted-foreground">
            <li>+91 98765 43210</li>
            <li>info@ironcoredetailing.com</li>
            <li>Whitefield, Bengaluru</li>
            <li>Mon–Sat: 8AM–7PM</li>
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-1.5 bg-primary hover:bg-primary-rust text-primary-foreground font-heading font-bold text-[12px] tracking-wider uppercase px-4 py-2 rounded-full transition-colors"
          >
            Get in Touch <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-[12px] text-text-muted">© 2025 IronCore Detailing. All Rights Reserved.</p>
        <div className="flex gap-4 font-body text-[12px] text-text-muted">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
