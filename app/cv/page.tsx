import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CVPage() {
  return (
    <div className="pt-28 pb-24 px-8 md:px-16 max-w-4xl">
      <ScrollReveal className="mb-16">
        <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-3">Curriculum Vitae</p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-ivory">Giti Azizi</h1>
        <p className="text-ash mt-2 tracking-wider">Fashion Designer — Tehran, Iran</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-14">
          <ScrollReveal>
            <Section title="Profile">
              <p className="text-ash leading-relaxed">
                Fashion designer with a BFA from Islamic Azad University of Shahrood (IAUSR), specialising in womenswear, 
                conceptual couture, and research-driven collections. Practice spans commercial ready-to-wear for Iranian 
                brands to internationally published editorial work. Published in Moevir Magazine Paris, 2025.
              </p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Section title="Education">
              <CVItem
                title="Bachelor of Fine Arts — Fashion Design"
                sub="Islamic Azad University of Shahrood (IAUSR)"
                detail="2019 – 2024"
              />
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Section title="Publications">
              <CVItem
                title="Princess Irulan Collection — Cover Story"
                sub="Moevir Magazine · Paris · Spring/Summer 2025"
                detail="Premium Print Platinum Edition"
              />
              <p className="text-sm text-ash/60 mt-2">Creative Direction: Ghazale Fallah · Photography: Abolfazl Safavi</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Section title="Selected Collections">
              <CVItem title="Princess Irulan Redesign" sub="Chainmail couture" detail="Winter 2025" />
              <CVItem title="Fallen Garden" sub="Womenswear" detail="Summer 2024" />
              <CVItem title="Tarchi Recycled Vests (20+ pieces, sold nationwide)" sub="Sustainable fashion" detail="Winter 2024" />
              <CVItem title="Graphiti T-Shirts" sub="Streetwear" detail="Fall 2024" />
              <CVItem title="Tarchi Summer Collection" sub="Womenswear" detail="Summer 2024" />
              <CVItem title="Love in the Air" sub="Womenswear" detail="Summer 2024" />
              <CVItem title="Classic Men's Shirt Redesign" sub="Menswear" detail="Fall 2023" />
            </Section>
          </ScrollReveal>
        </div>

        <div className="space-y-10">
          <ScrollReveal delay={100}>
            <Section title="Contact">
              <a href="mailto:azizigiti81@gmail.com" className="text-sm text-ash hover:text-ivory transition-colors block mb-2">
                azizigiti81@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/giti-azizi-a72625248" target="_blank" rel="noopener noreferrer" className="text-sm text-ash hover:text-ivory transition-colors block">
                LinkedIn
              </a>
              <p className="text-sm text-ash/60 mt-2">Tehran, Iran</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Section title="Skills">
              {["Fashion Design", "Pattern Making", "Draping", "Garment Construction", "Sustainable Design", "Brand Identity", "Styling", "Visual Research", "Adobe Illustrator", "CLO 3D"].map(s => (
                <p key={s} className="text-sm text-ash py-1 border-b border-white/5">{s}</p>
              ))}
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Section title="Languages">
              <p className="text-sm text-ash py-1 border-b border-white/5">Persian (Native)</p>
              <p className="text-sm text-ash py-1">English (Proficient)</p>
            </Section>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-4">{title}</p>
      {children}
    </div>
  );
}

function CVItem({ title, sub, detail }: { title: string; sub: string; detail: string }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-white/5 gap-4">
      <div>
        <p className="text-ivory text-sm">{title}</p>
        <p className="text-ash text-xs mt-0.5">{sub}</p>
      </div>
      <p className="text-[9px] tracking-wider text-ash/60 whitespace-nowrap">{detail}</p>
    </div>
  );
}
