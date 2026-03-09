import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-8 md:px-16">
      <ScrollReveal className="mb-20">
        <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-3">Get in Touch</p>
        <h1 className="font-display text-5xl md:text-7xl font-light text-ivory max-w-2xl">
          Let's create<br />
          <em className="italic text-ash">something</em>
        </h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <ScrollReveal>
          <div className="space-y-10">
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-4">Email</p>
              <a href="mailto:azizigiti81@gmail.com" className="font-display text-2xl text-ivory hover:text-ash transition-colors">
                azizigiti81@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-4">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/giti-azizi-a72625248"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory hover:text-ash transition-colors text-sm tracking-wider"
              >
                linkedin.com/in/giti-azizi
              </a>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-4">Location</p>
              <p className="text-ivory text-sm">Tehran, Iran</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-6">Services</p>
            <div className="space-y-4">
              {[
                "Custom fashion design & bespoke garments",
                "Fashion brand identity & collection direction",
                "Sustainable & upcycled garment construction",
                "Editorial styling & creative direction",
                "Pattern making & technical design",
                "Research & concept development",
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-white/5">
                  <span className="text-crimson text-xs mt-1">—</span>
                  <p className="text-ash text-sm">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
