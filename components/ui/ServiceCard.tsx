export default function ServiceCard({ service }: any) {
  return (
    <div className="border border-neutral-800 rounded-lg p-6">
      <div className="text-3xl mb-4">{service.icon}</div>
      <h3 className="font-semibold mb-2">{service.title}</h3>
      <p className="text-sm text-neutral-400">
        {service.description}
      </p>
    </div>
  )
}