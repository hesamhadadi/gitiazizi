"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "/collections", label: "Collections" },
    { href: "/research", label: "Research" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ];

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/90 backdrop-blur-md border-b border-white/5" : ""}`}>
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <Link href="/" className="font-display text-xl tracking-[0.2em] text-ivory uppercase">
          Giti Azizi
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[10px] tracking-[0.35em] uppercase font-body transition-colors duration-200 ${
                pathname === l.href ? "text-crimson" : "text-ash hover:text-ivory"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink/95 backdrop-blur-md px-8 pb-8 flex flex-col gap-6">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-[0.35em] uppercase font-body text-ivory"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
