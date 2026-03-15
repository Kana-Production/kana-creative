export default function ProjectCard({ project }: any) {
  return (
    <a
      href={project.link}
      target="_blank"
      className="border border-neutral-800 rounded-lg overflow-hidden hover:scale-105 transition"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm text-neutral-400">{project.category}</p>
      </div>
    </a>
  )
}