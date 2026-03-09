import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const featured = [
  {
    slug: "princess-irulan",
    title: "Princess Irulan",
    season: "Winter 2025",
    tag: "Published · Moevir Paris",
    cover: "/images/princess-irulan/06.jpg",
    span: "lg:col-span-2 lg:row-span-2",
    imgClass: "h-[60vh] lg:h-full",
  },
  {
    slug: "fallen-garden",
    title: "Fallen Garden",
    season: "Summer 2024",
    tag: "Womenswear",
    cover: "/images/fallen-garden/09.jpg",
    span: "lg:col-span-1",
    imgClass: "h-[45vh]",
  },
  {
    slug: "tarchi-vests",
    title: "Tarchi Recycled Vests",
    season: "Winter 2024",
    tag: "Sustainable",
    cover: "/images/tarchi-vests/05.jpg",
    span: "lg:col-span-1",
    imgClass: "h-[45vh]",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-14">
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-3">Selected Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ivory">Collections</h2>
          </div>
          <Link
            href="/collections"
            className="hidden md:inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-ash hover:text-ivory transition-colors group"
          >
            View All
            <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
          </Link>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:h-[80vh]">
        {featured.map((item, i) => (
          <ScrollReveal key={item.slug} delay={i * 120} className={item.span}>
            <Link href={`/collections/${item.slug}`} className={`group block relative overflow-hidden ${item.imgClass} lg:h-full`}>
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[8px] tracking-[0.4em] uppercase text-crimson mb-2">{item.tag}</p>
                <h3 className="font-display text-2xl text-ivory">{item.title}</h3>
                <p className="text-[10px] tracking-[0.3em] uppercase text-ash mt-1">{item.season}</p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-8 md:hidden">
        <Link href="/collections" className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-ash">
          View All Collections <span className="w-8 h-px bg-current" />
        </Link>
      </ScrollReveal>
    </section>
  );
}
