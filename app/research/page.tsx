import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPublishedResearch } from "@/lib/public-content";
import { unstable_noStore as noStore } from "next/cache";

export default async function ResearchPage() {
  noStore();

  let research = [] as Awaited<ReturnType<typeof getPublishedResearch>>;
  try {
    research = await getPublishedResearch();
  } catch {
    research = [];
  }

  return (
    <div className="pt-28 pb-24 px-8 md:px-16">
      <ScrollReveal className="mb-16">
        <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-3">Ideas & Process</p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-ivory">Research</h1>
      </ScrollReveal>

      <div className="space-y-0 divide-y divide-white/5">
        {research.map((item, i) => (
          <ScrollReveal key={item.slug} delay={i * 80}>
            <Link href={`/research/${item.slug}`} className="group grid grid-cols-1 md:grid-cols-4 gap-6 py-10 hover:bg-white/[0.02] transition-colors -mx-4 px-4">
              <div className="md:col-span-1">
                <div className="relative overflow-hidden aspect-video">
                  <Image src={item.images?.[0] || "/images/princess-irulan/02.jpg"} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="md:col-span-3 flex flex-col justify-center">
                <p className="text-[8px] tracking-[0.4em] uppercase text-crimson mb-2">{item.collection}</p>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3 group-hover:text-ash transition-colors">{item.title}</h3>
                <p className="text-sm text-ash leading-relaxed max-w-xl">{item.description}</p>
                <div className="mt-4 inline-flex items-center gap-3 text-[9px] tracking-[0.35em] uppercase text-ash group-hover:text-ivory transition-colors">
                  Read
                  <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
