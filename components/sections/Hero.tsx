"use client";

import SplitText from "@/components/ui/SplitText";
import ScrambledText from "@/components/ui/ScrambledText";
import LogoLoop from "@/components/ui/LogoLoop";

const imageLogos = [
  {
    src: "/platforms/fastworks.png",
    alt: "fastwork",
    href: "https://company1.com",
  },
  {
    src: "/platforms/fiverr.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/platforms/upwork.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "/platforms/99design.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "/platforms/pixiv.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex justify-center select-none pt-10">
        <SplitText
          text="From Design to Code"
          className="text-[10vw] font-bold text-neutral-800/10 text-center whitespace-nowrap"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/heroimg.png"
          alt="Hero Image"
          className="h-[70vh] md:h-[80vh] object-contain translate-y-16 opacity-60 md:opacity-100"
        />
      </div>

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto h-full items-center">
        {/* left side */}
        <div className="relative flex justify-start items-center">
          <svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full hidden md:block"
            overflow="visible"
          >
            <polyline
              points="300,20 200,20 150,100"
              fill="none"
              stroke="#f97316"
              strokeWidth="1.5"
              className="opacity-40 animate-pulse"
              vectorEffect="non-scaling-stroke"
              style={{ transform: "translateX(100%) scaleX(-1)" }} // Memutar garis ke arah gambar
            />
            <circle
              cx="53%"
              cy="20"
              r="3"
              fill="#f97316"
              className="opacity-60"
            />
          </svg>
          <div className="absolute -left-2 -top-2 w-4 h-4 border-l border-t border-orange-500/50" />
          <div className="text-neutral-400 max-w-xs pl-6 border-l border-neutral-400">
            <ScrambledText
              className="text-xs md:text-sm leading-relaxed"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Kana Creative is a small studio focused on crafting modern
              websites and visual experiences.
            </ScrambledText>
          </div>
        </div>

        {/* right side */}
        <div className="relative flex justify-end items-center">
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full hidden md:block"
            overflow="visible"
          >
            <polyline
              points="300,10 180,10 100,80"
              fill="none"
              stroke="#f97316"
              strokeWidth="1.5"
              className="opacity-40 animate-pulse"
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx="300"
              cy="10"
              r="3"
              fill="#f97316"
              className="opacity-60"
            />
          </svg>
          <div className="absolute -right-2 -top-2 w-4 h-4 border-r border-t border-orange-500/50" />
          <div className="text-neutral-400 max-w-xs pr-6 border-r border-neutral-400">
            <ScrambledText
              className="text-xs md:text-sm leading-relaxed"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Available on
            </ScrambledText>
            <LogoLoop
              logos={imageLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
