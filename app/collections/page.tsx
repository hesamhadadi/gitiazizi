import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPublishedCollections } from "@/lib/public-content";
import { unstable_noStore as noStore } from "next/cache";

export default async function CollectionsPage() {
  noStore();

  let collections = [] as Awaited<ReturnType<typeof getPublishedCollections>>;
  try {
    collections = await getPublishedCollections();
  } catch {
    collections = [];
  }

  return (
    <div className="pt-28 pb-24 px-8 md:px-16">
      <ScrollReveal className="mb-16">
        <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-3">Portfolio</p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-ivory">Collections</h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col, i) => (
          <ScrollReveal key={col.slug} delay={i * 80}>
            <Link href={`/collections/${col.slug}`} className="group block">
              <div className="relative overflow-hidden aspect-[4/3] mb-4">
                <Image
                  src={col.coverImage || col.images?.[0] || "/images/princess-irulan/06.jpg"}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-300" />
              </div>
              <p className="text-[8px] tracking-[0.4em] uppercase text-crimson mb-1">{col.tag || "Collection"}</p>
              <h3 className="font-display text-xl text-ivory mb-1">{col.title}</h3>
              <p className="text-[9px] tracking-[0.3em] uppercase text-ash">{[col.season, col.year].filter(Boolean).join(" ")}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
