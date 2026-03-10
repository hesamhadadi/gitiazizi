import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedResearchBySlug } from "@/lib/public-content";
import { unstable_noStore as noStore } from "next/cache";

export default async function ResearchDetail({ params }: { params: { slug: string } }) {
  noStore();

  let item: Awaited<ReturnType<typeof getPublishedResearchBySlug>> = null;
  try {
    item = await getPublishedResearchBySlug(params.slug);
  } catch {
    item = null;
  }

  if (!item) notFound();

  const images = item.images?.length ? item.images : ["/images/princess-irulan/02.jpg"];

  return (
    <div className="pt-24">
      <div className="relative h-[50vh] overflow-hidden">
        <Image src={images[0]} alt={item.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute bottom-0 left-0 px-8 md:px-16 pb-14">
          <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-3">{item.collection}</p>
          <h1 className="font-display text-4xl md:text-6xl font-light text-ivory max-w-3xl">{item.title}</h1>
        </div>
      </div>

      <div className="px-8 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          {(item.content || "").split("\n\n").map((p, i) => (
            <p key={i} className="text-ash leading-relaxed mb-6">{p}</p>
          ))}
        </div>
        <div className="space-y-4">
          {images.slice(1).map((img, i) => (
            <Image key={img + i} src={img} alt={`${item.title} ${i + 2}`} width={600} height={400} className="w-full object-cover" />
          ))}
        </div>
      </div>

      <div className="px-8 md:px-16 pb-16 border-t border-white/5 pt-10">
        <Link href="/research" className="inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-ash hover:text-ivory transition-colors group">
          <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
          All Research
        </Link>
      </div>
    </div>
  );
}
