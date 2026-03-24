import { projects } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";
import ScrambledText from "@/components/ui/ScrambledText";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 w-full overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none select-none">
        <h2 className="text-[14vw] font-bold text-neutral-800/10 whitespace-nowrap">
          PROJECTS
        </h2>
      </div>

      <div className="relative z-10 px-10 md:px-20 lg:px-30">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-600">
            Selected Projects
          </h2>
          <ScrambledText
            className="scrambled-text-demo text-sm text-neutral-400"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            A selection of projects where design meets technology.
          </ScrambledText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
        </div>
      </div>
    </section>
  );
}
