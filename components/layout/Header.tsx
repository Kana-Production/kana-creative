"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-500">
      <nav
        className={`mx-auto transition-all duration-500 flex items-center 
        ${
          scrolled
            ? "max-w-2xl mt-4 px-8 py-3 backdrop-blur-xl bg-white/5 shadow-2xl rounded-full border border-white/10"
            : "max-w-7xl px-6 py-6 bg-transparent border-transparent"
        } 
        /* Mobile: Center text | Desktop: Between */
        justify-center md:justify-between`}
      >
        {/* Brand Name */}
        <h1 className="font-bold text-lg tracking-tight text-neutral-500">
          Kana House Lab
        </h1>

        {/* Desktop Menu - Disembunyikan di mobile */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="text-neutral-400 hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="text-neutral-400 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
            Services
          </a>
          <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}