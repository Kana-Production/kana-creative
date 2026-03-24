export default function ProjectCard({ project }: any) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col p-3
                 bg-white/5 backdrop-blur-sm 
                 border border-white/10 rounded-[2.5rem] 
                 transition-all duration-500 hover:bg-emerald-500/5 hover:border-emerald-500/20"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-64 overflow-hidden rounded-[2rem]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-white">
            View Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-neutral-600 tracking-tight">
              {project.title}
            </h3>
            <span className="text-[10px] text-neutral-500 border border-neutral-800 px-2 py-0.5 rounded-full uppercase tracking-tighter">
              {project.year || "2024"}
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium text-emerald-500/80 uppercase tracking-widest">
              {project.category}
            </p>
            {/* Project Description */}
            <p className="text-sm text-neutral-400 font-light leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[10px]"
              />
            ))}
          </div>
          <svg
            className="w-5 h-5 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}