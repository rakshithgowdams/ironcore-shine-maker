import * as React from "react";

/**
 * Font Awesome icon wrappers.
 * Each component renders an <i> element using the FA 6 CSS kit loaded in index.html.
 * A contextual built-in FA animation (fa-beat / fa-spin / fa-bounce / fa-fade /
 * fa-beat-fade / fa-shake) is applied where it feels natural. Pass `noAnim`
 * to disable, or override `animation` to force a specific one.
 */

type FAAnim =
  | "fa-beat"
  | "fa-spin"
  | "fa-bounce"
  | "fa-fade"
  | "fa-beat-fade"
  | "fa-shake"
  | "fa-flip"
  | "";

type IconProps = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  size?: number | string;
  color?: string;
  /** Override the default contextual animation. Pass "" to disable. */
  animation?: FAAnim;
  /** Disable the built-in animation entirely. */
  noAnim?: boolean;
  /** Width/height kept for SVG-prop API compatibility. */
  width?: number | string;
  height?: number | string;
  strokeWidth?: number | string;
  fill?: string;
  stroke?: string;
  viewBox?: string;
};

const make = (faClass: string, defaultAnim: FAAnim = "") =>
  function FAIcon({
    className = "",
    size,
    color,
    animation,
    noAnim,
    style,
    width,
    height,
    strokeWidth,
    fill,
    stroke,
    viewBox,
    ...rest
  }: IconProps) {
    const anim = noAnim ? "" : animation ?? defaultAnim;
    const fontSize =
      size ?? width ?? height
        ? typeof (size ?? width ?? height) === "number"
          ? `${size ?? width ?? height}px`
          : (size ?? width ?? height)
        : undefined;
    return (
      <i
        {...rest}
        className={`${faClass} ${anim} ${className}`.trim()}
        style={{
          fontSize,
          color,
          display: "inline-block",
          lineHeight: 1,
          ...style,
        }}
        aria-hidden="true"
      />
    );
  };

// Utility / contact
export const Phone = make("fa-solid fa-phone", "fa-shake");
export const MapPin = make("fa-solid fa-location-dot", "fa-bounce");
export const Mail = make("fa-solid fa-envelope", "fa-beat");
export const Clock = make("fa-regular fa-clock", "fa-spin");
export const Check = make("fa-solid fa-check", "fa-beat");
export const ArrowRight = make("fa-solid fa-arrow-right", "fa-beat");
export const Menu = make("fa-solid fa-bars");
export const Close = make("fa-solid fa-xmark");
export const Star = make("fa-solid fa-star", "fa-beat-fade");
export const Plus = make("fa-solid fa-plus");
export const Search = make("fa-solid fa-magnifying-glass");
export const Filter = make("fa-solid fa-filter");
export const Upload = make("fa-solid fa-cloud-arrow-up", "fa-bounce");
export const Play = make("fa-solid fa-play", "fa-beat");
export const Calendar = make("fa-regular fa-calendar");
export const Briefcase = make("fa-solid fa-briefcase");

// Chevrons
export const ChevronLeft = make("fa-solid fa-chevron-left");
export const ChevronRight = make("fa-solid fa-chevron-right");
export const ChevronDown = make("fa-solid fa-chevron-down");

// Theme
export const Sun = make("fa-solid fa-sun", "fa-spin");
export const Moon = make("fa-solid fa-moon", "fa-beat-fade");

// Social / brands
export const Instagram = make("fa-brands fa-instagram", "fa-beat");
export const Facebook = make("fa-brands fa-facebook", "fa-beat");
export const Whatsapp = make("fa-brands fa-whatsapp", "fa-beat-fade");
export const Linkedin = make("fa-brands fa-linkedin", "fa-beat");
export const Google = make("fa-brands fa-google", "fa-beat-fade");
export const Twitter = make("fa-brands fa-x-twitter", "fa-beat");

// Service / feature icons (auto detailing context)
export const SprayCan = make("fa-solid fa-spray-can-sparkles", "fa-bounce");
export const Shield = make("fa-solid fa-shield-halved", "fa-beat");
export const Sparkles = make("fa-solid fa-wand-magic-sparkles", "fa-beat-fade");
export const Sofa = make("fa-solid fa-couch", "fa-fade");
export const Layers = make("fa-solid fa-layer-group", "fa-fade");
export const Engine = make("fa-solid fa-gears", "fa-spin");
export const Eye = make("fa-solid fa-eye", "fa-beat-fade");
export const Zap = make("fa-solid fa-bolt", "fa-flip");
export const Crosshair = make("fa-solid fa-crosshairs", "fa-spin");
export const Handshake = make("fa-solid fa-handshake", "fa-beat");
export const Lightbulb = make("fa-solid fa-lightbulb", "fa-beat-fade");
export const Target = make("fa-solid fa-bullseye", "fa-beat");
