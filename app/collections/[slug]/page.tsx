import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPublishedCollectionBySlug } from "@/lib/public-content";
import { unstable_noStore as noStore } from "next/cache";

export default async function CollectionDetail({ params }: { params: { slug: string } }) {
  noStore();

  let col: Awaited<ReturnType<typeof getPublishedCollectionBySlug>> = null;
  try {
    col = await getPublishedCollectionBySlug(params.slug);
  } catch {
    col = null;
  }

  if (!col) notFound();

  const images = col.images?.length ? col.images : [col.coverImage || "/images/princess-irulan/06.jpg"];

  return (
    <div className="pt-24">
      <div className="relative h-[70vh] overflow-hidden">
        <Image src={col.coverImage || images[0]} alt={col.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute bottom-0 left-0 px-8 md:px-16 pb-14">
          <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-3">{col.tag || "Collection"}</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-ivory">{col.title}</h1>
          <p className="text-[10px] tracking-[0.4em] uppercase text-ash mt-3">{[col.season, col.year].filter(Boolean).join(" ")}</p>
        </div>
      </div>

      <div className="px-8 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <ScrollReveal className="lg:col-span-2">
          <p className="font-display text-xl md:text-2xl text-ivory/80 leading-relaxed font-light">{col.story || col.description || ""}</p>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="space-y-8">
            <div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-crimson mb-3">Materials</p>
              <ul className="space-y-1">
                {(col.materials || []).map(m => (
                  <li key={m} className="text-sm text-ash">{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-crimson mb-3">Colour Palette</p>
              <div className="flex gap-2">
                {(col.palette || []).map(c => (
                  <div key={c} className="w-8 h-8 border border-white/10" style={{ background: c }} title={c} />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="px-8 md:px-16 pb-24 columns-1 md:columns-2 gap-4 space-y-4">
        {images.slice(1).map((img, i) => (
          <ScrollReveal key={img + i} delay={i * 60}>
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
