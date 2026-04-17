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
export const Phone = make("fa-solid fa-phone");
export const MapPin = make("fa-solid fa-location-dot");
export const Mail = make("fa-solid fa-envelope");
export const Clock = make("fa-regular fa-clock");
export const Check = make("fa-solid fa-check");
export const ArrowRight = make("fa-solid fa-arrow-right");
export const Menu = make("fa-solid fa-bars");
export const Close = make("fa-solid fa-xmark");
export const Star = make("fa-solid fa-star");
export const Plus = make("fa-solid fa-plus");
export const Search = make("fa-solid fa-magnifying-glass");
export const Filter = make("fa-solid fa-filter");
export const Upload = make("fa-solid fa-cloud-arrow-up");
export const Play = make("fa-solid fa-play");
export const Calendar = make("fa-regular fa-calendar");
export const Briefcase = make("fa-solid fa-briefcase");

// Chevrons
export const ChevronLeft = make("fa-solid fa-chevron-left");
export const ChevronRight = make("fa-solid fa-chevron-right");
export const ChevronDown = make("fa-solid fa-chevron-down");

// Theme
export const Sun = make("fa-solid fa-sun");
export const Moon = make("fa-solid fa-moon");

// Social / brands
export const Instagram = make("fa-brands fa-instagram");
export const Facebook = make("fa-brands fa-facebook");
export const Whatsapp = make("fa-brands fa-whatsapp");
export const Linkedin = make("fa-brands fa-linkedin");
export const Google = make("fa-brands fa-google");
export const Twitter = make("fa-brands fa-x-twitter");

// Service / feature icons
export const SprayCan = make("fa-solid fa-spray-can-sparkles");
export const Shield = make("fa-solid fa-shield-halved");
export const Sparkles = make("fa-solid fa-wand-magic-sparkles");
export const Sofa = make("fa-solid fa-couch");
export const Layers = make("fa-solid fa-layer-group");
export const Engine = make("fa-solid fa-gears");
export const Eye = make("fa-solid fa-eye");
export const Zap = make("fa-solid fa-bolt");
export const Crosshair = make("fa-solid fa-crosshairs");
export const Handshake = make("fa-solid fa-handshake");
export const Lightbulb = make("fa-solid fa-lightbulb");
export const Target = make("fa-solid fa-bullseye");
