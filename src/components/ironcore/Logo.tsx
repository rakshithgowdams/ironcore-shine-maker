import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-baseline gap-1 ${className}`} aria-label="IronCore Detailing home">
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="mr-1 -mb-1 inline-block shrink-0">
      <rect x="4" y="4" width="24" height="6" rx="1" fill="hsl(var(--primary))" />
      <rect x="13" y="10" width="6" height="12" fill="hsl(var(--primary))" />
      <rect x="4" y="22" width="24" height="6" rx="1" fill="hsl(var(--primary))" />
      <circle cx="8" cy="7" r="1" fill="hsl(var(--background))" />
      <circle cx="24" cy="7" r="1" fill="hsl(var(--background))" />
      <circle cx="8" cy="25" r="1" fill="hsl(var(--background))" />
      <circle cx="24" cy="25" r="1" fill="hsl(var(--background))" />
    </svg>
    <span className="font-heading font-bold text-foreground tracking-wide text-xl leading-none">IRON</span>
    <span className="font-heading font-bold text-primary tracking-wide text-xl leading-none">CORE</span>
    <span className="font-body text-[10px] tracking-[0.25em] text-muted-foreground ml-1 leading-none uppercase hidden sm:inline">Detailing</span>
  </Link>
);
