import { Phone, MapPin, Clock, Mail } from "@/components/ironcore/icons";

export const TopBar = () => (
  <div className="hidden md:block bg-bg-secondary border-b border-border h-9">
    <div className="container h-full flex items-center justify-between text-[12px] text-muted-foreground font-body">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> +91 98765 43210</span>
        <span className="text-border-strong">|</span>
        <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Bengaluru, Karnataka</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> Mon–Sat: 8AM–7PM</span>
        <span className="text-border-strong">|</span>
        <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> info@ironcoredetailing.com</span>
      </div>
    </div>
  </div>
);
