"use client";

import SplitText from "@/components/ui/SplitText";
import ScrambledText from "@/components/ui/ScrambledText";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex justify-center select-none">
        <SplitText
          text="From Design to Code"
          className="text-[10vw] font-bold text-neutral-800/30 text-center whitespace-nowrap"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />
      </div>

      {/* Image Center */}
      <img
        src="/heroimg.png"
        alt="Hero Image"
        className="absolute h-[70vh] object-contain z-10"
      />

      {/* Text Left & Right */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 w-full max-w-8xl items-center">
        {/* Left */}
        <div className="text-neutral-400 max-w-sm ">
          <ScrambledText
            className="scrambled-text-demo text-sm"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            Kana Creative is a small studio focused on crafting modern websites
            and visual experiences. We combine thoughtful design with clean code
            to create digital products that feel simple, elegant, and
            meaningful.
          </ScrambledText>
        </div>

        {/* Right */}
        <div className="text-neutral-400 max-w-sm ml-auto text-right">
          <p>
            From concept to development, Kana Creative explores the balance
            between creativity and technology — building digital experiences
            that are both beautiful and functional.
          </p>
        </div>
      </div>
    </section>
  );
}
