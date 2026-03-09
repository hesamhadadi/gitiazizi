import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div className="relative">
            <Image
              src="/images/tarchi-summer/11.jpg"
              alt="Giti Azizi"
              width={700}
              height={500}
              className="w-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 border border-white/10 w-full h-full pointer-events-none" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-md">
            <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-6">About</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ivory mb-8 leading-tight">
              Designing at the<br />
              <em className="italic text-ash">edge of identity</em>
            </h2>
            <p className="text-ash text-sm leading-relaxed mb-6">
              Giti Azizi is a fashion designer based in Tehran with a BFA from IAUSR. Her practice moves between 
              commercial womenswear, conceptual couture, and research-driven collections that engage 
              with Iranian visual culture, sustainability, and the body.
            </p>
            <p className="text-ash text-sm leading-relaxed mb-10">
              In 2025, her Princess Irulan collection was published in Moevir Magazine Paris — 
              the Spring/Summer Premium Print Platinum Edition — with creative direction by Ghazale Fallah 
              and photography by Abolfazl Safavi.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {["Womenswear", "Menswear", "Sustainable Design", "Pattern Making", "Brand Identity", "Visual Research"].map(tag => (
                <span key={tag} className="text-[9px] tracking-[0.25em] uppercase text-ash border border-white/10 px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/cv"
              className="inline-flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-ivory hover:text-crimson transition-colors group"
            >
              Full CV
              <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
