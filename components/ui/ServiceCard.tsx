export default function ServiceCard({ service }: any) {
  return (
    <div
      className="group relative flex flex-col justify-between h-full p-8 
                    bg-white/10  
                    border border-gray-500/10 rounded-[2.5rem] 
                    transition-all duration-500 hover:bg-emerald-200/10 hover:backdrop-blur-xs hover:border-emerald-600/20"
    >

      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-medium text-neutral-400 opacity-80 uppercase tracking-widest">
            Service Available
          </span>
          <h3 className="text-3xl font-semibold tracking-tight text-neutral-800/30 leading-tight">
            {service.title}
          </h3>
        </div>

        <div className="flex gap-2 py-2">
          <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-neutral-300">
            Premium
          </span>
          <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-neutral-300">
            Custom
          </span>
        </div>

        <p className="text-sm leading-relaxed text-neutral-800/30 line-clamp-3 pt-2">
          {service.description}
        </p>
      </div>

      <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center">
        <div>
          <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2">
            Available on
          </p>

          <div className="flex gap-3 items-center">
            {service.platforms?.map((platform: any, i: number) => (
              <img
                key={i}
                src={platform.logo}
                alt={platform.name}
                className="w-6 h-6 opacity-70 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
        <button className="px-6 py-2.5 bg-gray-300/10 hover:bg-gray-400/10 border border-white/10 rounded-2xl text-xs font-medium transition-colors">
          Details
        </button>
      </div>
    </div>
  );
}
