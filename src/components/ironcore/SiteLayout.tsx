import { ReactNode } from "react";
import { motion } from "framer-motion";
import { TopBar } from "@/components/ironcore/TopBar";
import { Navigation } from "@/components/ironcore/Navigation";
import { Footer } from "@/components/ironcore/Footer";

export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background text-foreground">
    <TopBar />
    <Navigation />
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      className="flex-1"
    >
      {children}
    </motion.main>
    <Footer />
  </div>
);
