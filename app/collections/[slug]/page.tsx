import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";

const collections: Record<string, any> = {
  "princess-irulan": {
    title: "Princess Irulan Redesign",
    season: "Winter 2025",
    tag: "Couture · Published in Moevir Paris",
    story: "A futuristic reimagining of Princess Irulan from Dune — power, femininity, and otherworldly elegance rendered in chainmail and crystal. Published in Moevir Magazine Paris, Spring/Summer 2025, Premium Print Platinum Edition. Creative direction: Ghazale Fallah. Photography: Abolfazl Safavi.",
    materials: ["Chainmail rings", "Crystal drops", "Black jersey", "Crepe", "Tulle"],
    palette: ["#dcdcdc", "#aaaaaa", "#8a8a8a", "#484848", "#000000"],
    images: Array.from({ length: 7 }, (_, i) => `/images/princess-irulan/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  "fallen-garden": {
    title: "Fallen Garden",
    season: "Summer 2024",
    tag: "Womenswear",
    story: "A meditation on beauty in decay — four night dresses that trace the lifecycle of a flower from dawn bloom to midnight fall. Satin and tulle become petals; corset boning becomes stem. Four looks — L1 through L4 — chart the stages of a garden through the night.",
    materials: ["Satin", "Tulle", "Corset boning", "Lace", "Organza"],
    palette: ["#e990ac", "#f2e3e8", "#c9a0b4", "#292929", "#ffffff"],
    images: Array.from({ length: 10 }, (_, i) => `/images/fallen-garden/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  "tarchi-vests": {
    title: "Tarchi Recycled Vests",
    season: "Winter 2024",
    tag: "Sustainable",
    story: "Starting with 5 kilograms of surplus upholstery fabric destined for landfill, each Tarchi vest is a unique artifact. Over 20 pieces handcrafted and sold nationwide across Iran. No two are alike.",
    materials: ["Reclaimed upholstery fabric", "Salvaged lining", "Vintage buttons", "Repurposed zippers"],
    palette: ["#8B6914", "#C4A882", "#2D4A6B", "#8B1A1A"],
    images: Array.from({ length: 7 }, (_, i) => `/images/tarchi-vests/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  "graphiti-tshirts": {
    title: "Graphiti T-Shirts",
    season: "Fall 2024",
    tag: "Streetwear",
    story: "Persian identity meets South American graffiti culture. Three t-shirt designs with Nastaliq calligraphy hand-drawn by Giti's father. Andy Warhol's philosophy of democratising art runs through the concept.",
    materials: ["100% cotton jersey", "Water-based screen print", "Hand-drawn Nastaliq calligraphy"],
    palette: ["#808080", "#2C1810", "#AF0019", "#f5f0eb"],
    images: Array.from({ length: 7 }, (_, i) => `/images/graphiti-tshirts/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  "tarchi-summer": {
    title: "Tarchi Summer Collection",
    season: "Summer 2024",
    tag: "Womenswear",
    story: "Cotton separates designed for the modern Iranian woman — hijab-conscious, colour-forward, and effortlessly wearable. Three complete looks in breathable cotton featuring candy pinks, coral reds, and soft greens.",
    materials: ["Cotton muslin", "Cotton poplin", "Cotton jersey", "Cotton voile"],
    palette: ["#f97394", "#d21011", "#fad7ad", "#c3e2da", "#8fe58a"],
    images: Array.from({ length: 11 }, (_, i) => `/images/tarchi-summer/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  "love-in-air": {
    title: "Love in the Air",
    season: "Summer 2024",
    tag: "Womenswear",
    story: "A Valentine's mini-collection — three red dresses that speak the universal language of desire. Black, crimson, and ivory. Pearl details catch candlelight; crepe falls with the weight of a whisper.",
    materials: ["Crepe", "Tulip fabric", "Satin", "Freshwater pearls", "Organza"],
    palette: ["#000000", "#af0019", "#eaeaea"],
    images: Array.from({ length: 8 }, (_, i) => `/images/love-in-air/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  "mens-shirt": {
    title: "Classic Men's Shirt Redesign",
    season: "Fall 2023",
    tag: "Menswear",
    story: "A deconstruction of the classic men's dress shirt — bishop sleeves, V-shaped ribbed yoke, pointed collar. Suiting fabric meets ribbed knit; tradition meets disruption.",
    materials: ["Suiting fabric", "Ribbed knit", "Mother-of-pearl buttons", "Cotton interfacing"],
    palette: ["#C8BEA8", "#A09070", "#6b5d4f", "#1a1a1a"],
    images: Array.from({ length: 5 }, (_, i) => `/images/mens-shirt/${String(i + 1).padStart(2, "0")}.jpg`),
  },
};

export default function CollectionDetail({ params }: { params: { slug: string } }) {
  const col = collections[params.slug];
  if (!col) notFound();

  return (
    <div className="pt-24">
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image src={col.images[0]} alt={col.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute bottom-0 left-0 px-8 md:px-16 pb-14">
          <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-3">{col.tag}</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-ivory">{col.title}</h1>
          <p className="text-[10px] tracking-[0.4em] uppercase text-ash mt-3">{col.season}</p>
        </div>
      </div>

      {/* Info */}
      <div className="px-8 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <ScrollReveal className="lg:col-span-2">
          <p className="font-display text-xl md:text-2xl text-ivory/80 leading-relaxed font-light">{col.story}</p>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="space-y-8">
            <div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-crimson mb-3">Materials</p>
              <ul className="space-y-1">
                {col.materials.map((m: string) => (
                  <li key={m} className="text-sm text-ash">{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-crimson mb-3">Colour Palette</p>
              <div className="flex gap-2">
                {col.palette.map((c: string) => (
                  <div key={c} className="w-8 h-8 border border-white/10" style={{ background: c }} title={c} />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* All images */}
      <div className="px-8 md:px-16 pb-24 columns-1 md:columns-2 gap-4 space-y-4">
        {col.images.slice(1).map((img: string, i: number) => (
          <ScrollReveal key={i} delay={i * 60}>
            <Image src={img} alt={`${col.title} ${i + 2}`} width={900} height={600} className="w-full object-cover mb-4 break-inside-avoid" />
          </ScrollReveal>
        ))}
      </div>

      <div className="px-8 md:px-16 pb-16 border-t border-white/5 pt-12">
        <Link href="/collections" className="inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-ash hover:text-ivory transition-colors group">
          <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
          All Collections
        </Link>
      </div>
    </div>
  );
}
