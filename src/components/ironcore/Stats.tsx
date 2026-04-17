import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Cars Detailed" },
  { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
  { value: 98,  suffix: "%", label: "Client Retention" },
  { value: 5,   suffix: " Yrs", label: "In Business" },
];

const Counter = ({ to, decimals = 0 }: { to: number; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals);
      },
    });
    return controls.stop;
  }, [inView, mv, to, decimals]);

  return <span ref={ref}>0</span>;
};

export const Stats = () => (
  <section className="bg-bg-secondary border-y border-bg-tertiary py-12">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-bg-tertiary">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-4 first:pl-0 last:pr-0">
            <div className="font-display text-5xl md:text-6xl text-primary leading-none">
              <Counter to={s.value} decimals={s.decimals} />
              <span>{s.suffix}</span>
            </div>
            <div className="mt-2 font-body text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
