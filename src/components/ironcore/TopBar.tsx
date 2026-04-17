import { Phone, MapPin, Clock, Mail } from "@/components/ironcore/icons";

export const TopBar = () => (
  <div className="hidden md:block bg-bg-tertiary border-b border-border h-9">
    <div className="container h-full flex items-center justify-between text-[12px] text-muted-foreground font-body">
      <div className="flex items-center gap-4">
        <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone className="w-3 h-3" /> +91 98765 43210
        </a>
        <span className="text-border-strong">|</span>
        <a
          href="https://maps.google.com/?q=Whitefield+Bengaluru"
          target="_blank"
          rel="noopener"
          className="flex items-center gap-1.5 hover:text-primary transition-colors"
        >
          <MapPin className="w-3 h-3" /> Whitefield, Bengaluru
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> Mon–Sat: 8AM–7PM</span>
        <span className="text-border-strong">|</span>
        <a href="mailto:info@ironcoredetailing.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Mail className="w-3 h-3" /> info@ironcoredetailing.com
        </a>
      </div>
    </div>
  </div>
);
