import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

const base = (props: IconProps) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Phone = (p: IconProps) => (
  <svg {...base(p)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
export const MapPin = (p: IconProps) => (
  <svg {...base(p)}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
export const Mail = (p: IconProps) => (
  <svg {...base(p)}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
);
export const Clock = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
export const Check = (p: IconProps) => (
  <svg {...base(p)}><polyline points="20 6 9 17 4 12"/></svg>
);
export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
export const Menu = (p: IconProps) => (
  <svg {...base(p)}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
export const Close = (p: IconProps) => (
  <svg {...base(p)}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
export const Star = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
export const Instagram = (p: IconProps) => (
  <svg {...base(p)}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
export const Facebook = (p: IconProps) => (
  <svg {...base(p)}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
export const Whatsapp = (p: IconProps) => (
  <svg {...base(p)}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
);
export const Google = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
);

// Service icons
export const SprayCan = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 3h6M6 3v4M9 7h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/><circle cx="11" cy="14" r="2"/></svg>
);
export const Shield = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
);
export const Sparkles = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z"/></svg>
);
export const Sofa = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 11v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M3 11a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3h10v-3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2"/></svg>
);
export const Layers = (p: IconProps) => (
  <svg {...base(p)}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
export const Engine = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="8" width="18" height="10" rx="2"/><path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M3 13h2M19 13h2M9 18v3M15 18v3"/></svg>
);
export const Eye = (p: IconProps) => (
  <svg {...base(p)}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
);
export const Zap = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
export const ChevronLeft = (p: IconProps) => (
  <svg {...base(p)}><polyline points="15 18 9 12 15 6"/></svg>
);
export const ChevronRight = (p: IconProps) => (
  <svg {...base(p)}><polyline points="9 18 15 12 9 6"/></svg>
);
