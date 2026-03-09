"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    document.addEventListener("mousemove", move);

    const animate = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    const addHover = () => { ringRef.current?.classList.add("scale-150"); dotRef.current?.classList.add("opacity-0"); };
    const removeHover = () => { ringRef.current?.classList.remove("scale-150"); dotRef.current?.classList.remove("opacity-0"); };
    document.querySelectorAll("a,button,[data-hover]").forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-1.5 h-1.5 bg-crimson rounded-full pointer-events-none z-[99999] transition-opacity duration-200" style={{ willChange: "transform" }} />
      <div ref={ringRef} className="fixed top-0 left-0 w-8 h-8 border border-ivory/40 rounded-full pointer-events-none z-[99998] transition-transform duration-200" style={{ willChange: "transform" }} />
    </>
  );
}
