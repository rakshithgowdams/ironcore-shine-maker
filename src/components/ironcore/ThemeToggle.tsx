import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "@/components/ironcore/icons";

export const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative w-[52px] h-7 rounded-full border border-border bg-bg-tertiary flex items-center px-1 transition-colors ${className}`}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`absolute top-1 ${isDark ? "right-1" : "left-1"} w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground`}
      >
        {isDark ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
      </motion.span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
