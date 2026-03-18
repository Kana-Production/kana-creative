export default function ServiceCard({ service }: any) {
  return (
    <div className="group relative h-full rounded-[2.5rem] p-[1px] overflow-hidden transition-all duration-500">
      
      {/* 1. Gradient Border Layer (Background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/30 opacity-100 transition-all duration-500 group-hover:from-lime-500/10 group-hover:to-lime-500/10" />

      {/* 2. Main Card Content Container */}
      <div className="relative flex flex-col justify-between h-full p-8 rounded-[calc(2.5rem-1px)] bg-neutral-600/5 z-10 transition-all duration-500 group-hover:bg-neutral-600/10 hover:backdrop-blur-xs">
        
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-medium text-neutral-500 opacity-80 uppercase tracking-widest">
              Service Available
            </span>
            <h3 className="text-3xl font-semibold tracking-tight text-neutral-600 leading-tight">
              {service.title}
            </h3>
          </div>

          <div className="flex gap-2 py-2">
            <span className="px-4 py-1.5 bg-white/80 border border-neutral-500/30 rounded-xl text-[10px] text-neutral-500 uppercase tracking-tighter">
              Premium
            </span>
            <span className="px-4 py-1.5 bg-white/80 border border-neutral-500/30 rounded-xl text-[10px] text-neutral-500 uppercase tracking-tighter">
              Custom
            </span>
          </div>

          <p className="text-sm leading-relaxed text-neutral-400 line-clamp-3 pt-2">
            {service.description}
          </p>
        </div>

        {/* Footer Section */}
        <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center">
          <div>
            <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2">
              Book this service on
            </p>
            <div className="flex gap-3 items-center">
              {service.platforms?.map((platform: any, i: number) => (
                <img
                  key={i}
                  src={platform.logo}
                  alt={platform.name}
                  className="w-6 h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>
          </div>
          <button className="px-6 py-2.5 bg-neutral-600/50 hover:bg-white/10 border border-neutral-600/10 hover:border-lime-500/40  rounded-2xl text-xs font-medium text-white hover:text-neutral-600 transition-all">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}