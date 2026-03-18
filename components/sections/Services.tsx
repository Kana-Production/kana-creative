import { services } from "@/data/services";
import ServiceCard from "../ui/ServiceCard";
import ScrambledText from "@/components/ui/ScrambledText";

export default function Services() {
  return (
    <section id="services" className="relative py-32 w-full overflow-x-clip overflow-y-visible">
      
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none select-none">
        <h2 className="text-[14vw] font-bold text-neutral-800/10 whitespace-nowrap">
          SERVICES
        </h2>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 overflow-y-visible">
        <img
          src="/servicesection.png"
          alt="Services Image"
          className="absolute right-[-10%] bottom-[-20%] h-[90vh] object-contain opacity-80 md:opacity-100"
          style={{ maxWidth: 'none' }} 
        />
      </div>

      <div className="relative z-20 px-10 md:px-20 lg:px-30">
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-600">
            What we create
          </h2>

          <ScrambledText
            className="scrambled-text-demo text-sm text-neutral-400"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            Kana Creative blends design and technology to craft meaningful
            digital experiences. From visual storytelling to modern web
            development, we help ideas transform into interactive products.
          </ScrambledText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}