"use client";

import SplitText from "@/components/ui/SplitText";
import ScrambledText from "@/components/ui/ScrambledText";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex justify-center select-none pt-10">
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

      <img
        src="/heroimg.png"
        alt="Hero Image"
        className="absolute h-[80vh] object-contain z-10 translate-y-16"
      />

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 w-full items-center -translate-y-10">
       
        <div className="text-neutral-400 max-w-xl">
          <ScrambledText
            className="scrambled-text-demo text-sm px-20"
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

        <div className="text-neutral-400 max-w-xl ml-auto text-right">
          <ScrambledText
            className="scrambled-text-demo text-sm px-20"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            From concept to development, Kana Creative explores the balance
            between creativity and technology — building digital experiences
            that are both beautiful and functional.
          </ScrambledText>
        </div>
      </div>
    </section>
  );
}
