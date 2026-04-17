import { TopBar } from "@/components/ironcore/TopBar";
import { Navigation } from "@/components/ironcore/Navigation";
import { Hero } from "@/components/ironcore/Hero";
import { Stats } from "@/components/ironcore/Stats";
import { Services } from "@/components/ironcore/Services";
import { About } from "@/components/ironcore/About";
import { Process } from "@/components/ironcore/Process";
import { Pricing } from "@/components/ironcore/Pricing";
import { Gallery } from "@/components/ironcore/Gallery";
import { Testimonials } from "@/components/ironcore/Testimonials";
import { VisionMission } from "@/components/ironcore/VisionMission";
import { Contact } from "@/components/ironcore/Contact";
import { Footer } from "@/components/ironcore/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Process />
        <Pricing />
        <Gallery />
        <Testimonials />
        <VisionMission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
