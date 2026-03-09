"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth: W, innerHeight: H } = window;
      const x = (e.clientX / W - 0.5) * 20;
      const y = (e.clientY / H - 0.5) * 20;
      containerRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.06)`;
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-end">
      {/* BG Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={containerRef} className="absolute inset-[-5%] transition-transform duration-700 ease-out">
          <Image
            src="/images/princess-irulan/06.jpg"
            alt="Giti Azizi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 pb-16 md:px-16 md:pb-24 w-full">
        <div className="max-w-4xl">
          <p
            className="text-[10px] tracking-[0.5em] uppercase text-crimson mb-6 animate-fadeUp"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Fashion Designer — Tehran
          </p>
          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light leading-none text-ivory mb-8 animate-fadeUp"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Giti
            <br />
            <em className="italic text-ash">Azizi</em>
          </h1>
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fadeUp"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            <Link
              href="/collections"
              className="group inline-flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-ivory border border-ivory/20 px-8 py-4 hover:border-crimson hover:text-crimson transition-all duration-300"
            >
              View Collections
              <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
            </Link>
            <p className="text-[9px] tracking-[0.3em] uppercase text-ash">
              Published · Moevir Magazine Paris · 2025
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 z-10">
        <p className="text-[8px] tracking-[0.4em] uppercase text-ash rotate-90 origin-center mb-6">Scroll</p>
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-ash/50" />
      </div>
    </section>
  );
}
