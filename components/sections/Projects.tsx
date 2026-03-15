import { projects } from "@/data/projects"
import ProjectCard from "../ui/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10">Selected Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  )
}