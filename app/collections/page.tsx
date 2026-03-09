import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const collections = [
  { slug: "princess-irulan", title: "Princess Irulan Redesign", season: "Winter 2025", cover: "/images/princess-irulan/06.jpg", tag: "Couture · Published" },
  { slug: "fallen-garden", title: "Fallen Garden", season: "Summer 2024", cover: "/images/fallen-garden/09.jpg", tag: "Womenswear" },
  { slug: "tarchi-vests", title: "Tarchi Recycled Vests", season: "Winter 2024", cover: "/images/tarchi-vests/05.jpg", tag: "Sustainable" },
  { slug: "graphiti-tshirts", title: "Graphiti T-Shirts", season: "Fall 2024", cover: "/images/graphiti-tshirts/07.jpg", tag: "Streetwear" },
  { slug: "tarchi-summer", title: "Tarchi Summer Collection", season: "Summer 2024", cover: "/images/tarchi-summer/11.jpg", tag: "Womenswear" },
  { slug: "love-in-air", title: "Love in the Air", season: "Summer 2024", cover: "/images/love-in-air/07.jpg", tag: "Womenswear" },
  { slug: "mens-shirt", title: "Classic Men's Shirt Redesign", season: "Fall 2023", cover: "/images/mens-shirt/04.jpg", tag: "Menswear" },
];

export default function CollectionsPage() {
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
                  src={col.cover}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-300" />
              </div>
              <p className="text-[8px] tracking-[0.4em] uppercase text-crimson mb-1">{col.tag}</p>
              <h3 className="font-display text-xl text-ivory mb-1">{col.title}</h3>
              <p className="text-[9px] tracking-[0.3em] uppercase text-ash">{col.season}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
