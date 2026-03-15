import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import PixelBlast from "@/components/ui/PixelBlast";

export default function Home() {
  return (
    <main className="relative">

      {/* Background PixelBlast */}
      <div className="fixed inset-0 -z-10">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#f0f6f0"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Content */}
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />

    </main>
  );
}