import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaSection() {
  return (
    <footer className="border-t border-white/5">
      {/* CTA */}
      <section className="px-8 md:px-16 py-24 md:py-40 text-center">
        <ScrollReveal>
          <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-6">Let's work together</p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-ivory mb-10">
            Start a conversation
          </h2>
          <a
            href="mailto:azizigiti81@gmail.com"
            className="group inline-flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-ivory border border-white/15 px-10 py-5 hover:border-crimson hover:text-crimson transition-all duration-300"
          >
            azizigiti81@gmail.com
            <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
          </a>
        </ScrollReveal>
      </section>

      {/* Footer nav */}
      <div className="px-8 md:px-16 py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg tracking-[0.2em] text-ivory">Giti Azizi</p>
        <nav className="flex gap-8">
          {[
            { href: "/collections", label: "Collections" },
            { href: "/research", label: "Research" },
            { href: "/cv", label: "CV" },
            { href: "/contact", label: "Contact" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-[9px] tracking-[0.35em] uppercase text-ash hover:text-ivory transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-[9px] tracking-[0.2em] text-ash/60">© 2025 Giti Azizi</p>
      </div>
    </footer>
  );
}
