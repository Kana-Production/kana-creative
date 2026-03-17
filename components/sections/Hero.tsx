"use client";

import SplitText from "@/components/ui/SplitText";
import ScrambledText from "@/components/ui/ScrambledText";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 flex justify-center select-none pt-10">
        <SplitText
          text="From Design to Code"
          className="text-[10vw] font-bold text-neutral-800/20 text-center whitespace-nowrap"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />
      </div>

      {/* Hero Image */}
      <img
        src="/heroimg.png"
        alt="Hero Image"
        className="absolute h-[75vh] object-contain z-10 translate-y-16 opacity-100"
      />

      {/* Leader Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-15" xmlns="http://www.w3.org/2000/svg">
        {/* Garis Kiri */}
        <g className="opacity-50">
          <polyline
            points="450, 400 500, 400 550,500" 
            fill="none"
            stroke="#f97316" /* Warna Orange seperti di gambar */
            strokeWidth="1"
            className="animate-pulse"
          />
          <circle cx="450" cy="400" r="3" fill="#f97316" />
        </g>

        {/* Garis Kanan */}
        <g className="opacity-50">
          <polyline
            points="850,480 930,480 970,550"
            fill="none"
            stroke="#f97316"
            strokeWidth="1"
            className="animate-pulse"
          />
          <circle cx="850" cy="480" r="3" fill="#f97316" />
        </g>
      </svg>

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 w-full items-center -translate-y-10 max-w-7xl mx-auto px-10">
        
        {/* Box Kiri */}
        <div className="relative group">
          {/* Aksesoris Siku Box (Opsional, agar makin mirip gambar) */}
          <div className="absolute -left-2 -top-2 w-4 h-4 border-l border-t border-orange-500/50" />
          
          <div className="text-neutral-400 max-w-xs pl-6 border-l border-neutral-400">
            <ScrambledText
              className="text-xs md:text-sm leading-relaxed"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Kana Creative is a small studio focused on crafting modern websites
              and visual experiences. We combine thoughtful design with clean code.
            </ScrambledText>
          </div>
        </div>

        {/* Box Kanan */}
        <div className="relative group flex justify-end text-right">
          {/* Aksesoris Siku Box */}
          <div className="absolute -right-2 -top-2 w-4 h-4 border-r border-t border-orange-500/50" />

          <div className="text-neutral-400 max-w-sm pr-6 border-r border-neutral-800">
            <ScrambledText
              className="text-xs md:text-sm leading-relaxed"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              From concept to development, Kana Creative explores the balance
              between creativity and technology — building digital experiences.
            </ScrambledText>
          </div>
        </div>
      </div>
    </section>
  );
}