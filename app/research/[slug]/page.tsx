import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const research: Record<string, any> = {
  "dune-power-femininity": {
    title: "Dune: Power, Femininity & Futurism",
    collection: "Princess Irulan Redesign",
    content: "The figure of Princess Irulan in Frank Herbert's Dune occupies a uniquely ambiguous position of power: politically central yet narratively marginal, regal yet constrained. This research explores how her silhouette — always immaculate, always armoured — became the conceptual foundation for the collection.\n\nReferences drawn from Byzantine court dress, medieval chainmail, and the futurist aesthetic of early concept art for Villeneuve's 2021 film adaptation. The chainmail as a material choice speaks to this duality: armour that is simultaneously jewellery, protection that is simultaneously display.\n\nThe colour palette — a strict greyscale from silver to black — references the monochrome severity of the Bene Gesserit sisterhood as much as it does contemporary minimalism.",
    images: ["/images/princess-irulan/01.jpg", "/images/princess-irulan/02.jpg", "/images/princess-irulan/03.jpg", "/images/princess-irulan/04.jpg"],
  },
  "life-cycles-natural-decay": {
    title: "Life Cycles & Natural Decay in Fashion",
    collection: "Fallen Garden",
    content: "Fallen Garden began with a simple observation: the most beautiful moment of a flower is not its peak bloom but the instant before it falls. This research surveys artists and designers who have engaged with decay as aesthetic: Vanitas still-life painters, Alexander McQueen's 'Sarabande' collection, the rotting fruit photography of Maciej Zaborski.\n\nThe collection's four looks map directly onto four stages of botanical decay: dawn (L1, pale pink satin, dew-fresh), midday (L2, deeper rose, full bloom), twilight (L3, muted mauve, petals beginning to curl), and midnight (L4, almost black, the final surrender).\n\nJapanese wabi-sabi philosophy underpins this — the acceptance that impermanence and incompleteness are not flaws but the very essence of beauty.",
    images: ["/images/fallen-garden/02.jpg", "/images/fallen-garden/04.jpg", "/images/fallen-garden/05.jpg", "/images/fallen-garden/08.jpg"],
  },
  "sustainability-fabric-manipulation": {
    title: "Sustainability & Fabric Manipulation",
    collection: "Tarchi Recycled Vests",
    content: "The Tarchi Recycled Vests project emerged from a very practical constraint: 5 kilograms of upholstery fabric that a furniture workshop was about to discard. This research documents the process of transforming waste into wearable objects.\n\nDrawing on the traditions of Japanese boro textiles — clothing patched together from scraps, the most humble of objects elevated through accumulated care — each vest becomes a record of material salvage. The heavy, stiff upholstery fabric required different construction techniques than conventional fashion fabrics: fewer seams, more structural draping.\n\nThe project also engages with the growing slow fashion movement in Iran, where economic conditions have created their own creative constraints. Waste as material. Limitation as creative engine.",
    images: ["/images/tarchi-vests/02.jpg", "/images/tarchi-vests/03.jpg", "/images/tarchi-vests/06.jpg", "/images/tarchi-vests/07.jpg"],
  },
  "protest-art-persian-identity": {
    title: "Protest Art, Graffiti & Persian Identity",
    collection: "Graphiti T-Shirts",
    content: "The Graphiti T-Shirts project sits at the intersection of several visual traditions: the revolutionary energy of Latin American street art, the ancient authority of Persian Nastaliq script, and the Warholian democratisation of art through mass-production.\n\nThe calligraphy — drawn by Giti's father — connects the contemporary to the ancestral, making each shirt a dialogue across generations. The phrases chosen are deliberately vernacular, even slang: دختر ایرونی مثل گل (Iranian girl like a flower), پشمااام OMG, بد گل گریه نکن (bad flower don't cry).\n\nThis collision of registers — elevated calligraphic form, lowly street slang — mirrors the collision of traditions: Persian classical, South American street, American pop. The t-shirt as the most democratic of canvases.",
    images: ["/images/graphiti-tshirts/03.jpg", "/images/graphiti-tshirts/04.jpg", "/images/graphiti-tshirts/05.jpg", "/images/graphiti-tshirts/07.jpg"],
  },
};

export default function ResearchDetail({ params }: { params: { slug: string } }) {
  const item = research[params.slug];
  if (!item) notFound();

  return (
    <div className="pt-24">
      <div className="relative h-[50vh] overflow-hidden">
        <Image src={item.images[0]} alt={item.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute bottom-0 left-0 px-8 md:px-16 pb-14">
          <p className="text-[9px] tracking-[0.5em] uppercase text-crimson mb-3">{item.collection}</p>
          <h1 className="font-display text-4xl md:text-6xl font-light text-ivory max-w-3xl">{item.title}</h1>
        </div>
      </div>

      <div className="px-8 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          {item.content.split("\n\n").map((p: string, i: number) => (
            <p key={i} className="text-ash leading-relaxed mb-6">{p}</p>
          ))}
        </div>
        <div className="space-y-4">
          {item.images.slice(1).map((img: string, i: number) => (
            <Image key={i} src={img} alt={`${item.title} ${i + 2}`} width={600} height={400} className="w-full object-cover" />
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
