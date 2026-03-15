import { services } from "@/data/services"
import ServiceCard from "../ui/ServiceCard"

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10">Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </section>
  )
}