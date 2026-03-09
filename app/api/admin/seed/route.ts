import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Collection from "@/models/Collection";
import Research from "@/models/Research";

export async function POST(req: NextRequest) {
  if (req.headers.get("x-seed-secret") !== process.env.SEED_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  await Collection.deleteMany({});
  await Research.deleteMany({});

  const collections = [
    {
      slug: "princess-irulan",
      title: "Princess Irulan Redesign",
      season: "Winter",
      year: "2025",
      description: "A futuristic reimagining of Princess Irulan from Dune — power, femininity, and otherworldly elegance rendered in chainmail and crystal.",
      story: "Inspired by the character of Princess Irulan from Frank Herbert's Dune, this collection channels royal authority and quiet power through structural metallic forms. The chainmail references medieval armour reinterpreted as haute couture, while crystal drops catch light like desert sand. Published in Moevir Magazine Paris, Spring/Summer 2025 — Platinum Edition.",
      materials: ["Chainmail rings", "Crystal drops", "Black jersey", "Crepe", "Tulle"],
      palette: ["#dcdcdc", "#aaaaaa", "#8a8a8a", "#484848", "#000000"],
      images: [
        "/images/princess-irulan/01.jpg",
        "/images/princess-irulan/02.jpg",
        "/images/princess-irulan/03.jpg",
        "/images/princess-irulan/04.jpg",
        "/images/princess-irulan/05.jpg",
        "/images/princess-irulan/06.jpg",
        "/images/princess-irulan/07.jpg",
      ],
      coverImage: "/images/princess-irulan/06.jpg",
      featured: true,
      order: 1,
    },
    {
      slug: "fallen-garden",
      title: "Fallen Garden",
      season: "Summer",
      year: "2024",
      description: "A meditation on beauty in decay — night dresses that trace the lifecycle of a flower from bloom to inevitable fall.",
      story: "Fallen Garden explores the poetic tension between flourishing and wilting. Four looks — L1 through L4 — chart the stages of a garden through the night: dawn, midday blush, twilight, and the final surrender to darkness. Satin and tulle become petals; corset boning becomes stem.",
      materials: ["Satin", "Tulle", "Corset boning", "Lace", "Organza"],
      palette: ["#e990ac", "#f2e3e8", "#c9a0b4", "#292929", "#ffffff"],
      images: [
        "/images/fallen-garden/01.jpg",
        "/images/fallen-garden/02.jpg",
        "/images/fallen-garden/03.jpg",
        "/images/fallen-garden/04.jpg",
        "/images/fallen-garden/05.jpg",
        "/images/fallen-garden/06.jpg",
        "/images/fallen-garden/07.jpg",
        "/images/fallen-garden/08.jpg",
        "/images/fallen-garden/09.jpg",
        "/images/fallen-garden/10.jpg",
      ],
      coverImage: "/images/fallen-garden/09.jpg",
      featured: true,
      order: 2,
    },
    {
      slug: "tarchi-vests",
      title: "Tarchi Recycled Vests",
      season: "Winter",
      year: "2024",
      description: "Over 20 upcycled vests handcrafted from 5kg of reclaimed upholstery fabric — sold nationwide, zero waste.",
      story: "Starting with 5 kilograms of surplus upholstery fabric destined for landfill, each Tarchi vest is a unique artifact. No two are alike. The heavy, structural material — normally used for sofas and curtains — becomes a wearable statement on sustainability and craft. Sold across Iran through independent boutiques.",
      materials: ["Reclaimed upholstery fabric", "Salvaged lining", "Vintage buttons", "Repurposed zippers"],
      palette: ["#8B6914", "#C4A882", "#2D4A6B", "#8B1A1A", "#4a3728"],
      images: [
        "/images/tarchi-vests/01.jpg",
        "/images/tarchi-vests/02.jpg",
        "/images/tarchi-vests/03.jpg",
        "/images/tarchi-vests/04.jpg",
        "/images/tarchi-vests/05.jpg",
        "/images/tarchi-vests/06.jpg",
        "/images/tarchi-vests/07.jpg",
      ],
      coverImage: "/images/tarchi-vests/05.jpg",
      featured: true,
      order: 3,
    },
    {
      slug: "graphiti-tshirts",
      title: "Graphiti T-Shirts",
      season: "Fall",
      year: "2024",
      description: "Persian identity meets South American graffiti culture — three t-shirt designs with Nastaliq calligraphy by her father.",
      story: "A collision of cultural visual languages: the spray-paint energy of São Paulo and Buenos Aires meets the ancient elegance of Persian Nastaliq script. Andy Warhol's philosophy of democratizing art runs through the concept. The calligraphy was hand-drawn by Giti's father, turning each piece into a family artifact. Three designs: دختر ایرونی مثل گل / پشمااام OMG / بد گل گریه نکن",
      materials: ["100% cotton jersey", "Water-based screen print", "Hand-drawn Nastaliq calligraphy"],
      palette: ["#808080", "#2C1810", "#AF0019", "#f5f0eb", "#000000"],
      images: [
        "/images/graphiti-tshirts/01.jpg",
        "/images/graphiti-tshirts/02.jpg",
        "/images/graphiti-tshirts/03.jpg",
        "/images/graphiti-tshirts/04.jpg",
        "/images/graphiti-tshirts/05.jpg",
        "/images/graphiti-tshirts/06.jpg",
        "/images/graphiti-tshirts/07.jpg",
      ],
      coverImage: "/images/graphiti-tshirts/07.jpg",
      featured: false,
      order: 4,
    },
    {
      slug: "tarchi-summer",
      title: "Tarchi Summer Collection",
      season: "Summer",
      year: "2024",
      description: "Cotton separates designed for the modern Iranian woman — hijab-conscious, colour-forward, and effortlessly wearable.",
      story: "Designed with the Tarchi brand's customer at heart: a young Iranian woman who wants vibrant, contemporary clothing that respects modest dress codes without compromising on personality. Three complete looks in breathable cotton, featuring separates that mix and match. Candy pinks, coral reds, and soft greens.",
      materials: ["Cotton muslin", "Cotton poplin", "Cotton jersey", "Cotton voile"],
      palette: ["#f97394", "#d21011", "#fad7ad", "#c3e2da", "#8fe58a"],
      images: [
        "/images/tarchi-summer/01.jpg",
        "/images/tarchi-summer/02.jpg",
        "/images/tarchi-summer/03.jpg",
        "/images/tarchi-summer/04.jpg",
        "/images/tarchi-summer/05.jpg",
        "/images/tarchi-summer/06.jpg",
        "/images/tarchi-summer/07.jpg",
        "/images/tarchi-summer/08.jpg",
        "/images/tarchi-summer/09.jpg",
        "/images/tarchi-summer/10.jpg",
        "/images/tarchi-summer/11.jpg",
      ],
      coverImage: "/images/tarchi-summer/11.jpg",
      featured: false,
      order: 5,
    },
    {
      slug: "love-in-air",
      title: "Love in the Air",
      season: "Summer",
      year: "2024",
      description: "A Valentine's mini-collection — three red dresses that speak the universal language of desire.",
      story: "Created for the Tarchi brand's Valentine's campaign, Love in the Air distils romance into three dresses. Black, crimson, and ivory — the eternal triad. Pearl details catch candlelight; crepe falls with the weight of a whisper. Each dress is a complete love letter.",
      materials: ["Crepe", "Tulip fabric", "Satin", "Freshwater pearls", "Organza"],
      palette: ["#000000", "#af0019", "#eaeaea", "#c8a882", "#ffffff"],
      images: [
        "/images/love-in-air/01.jpg",
        "/images/love-in-air/02.jpg",
        "/images/love-in-air/03.jpg",
        "/images/love-in-air/04.jpg",
        "/images/love-in-air/05.jpg",
        "/images/love-in-air/06.jpg",
        "/images/love-in-air/07.jpg",
        "/images/love-in-air/08.jpg",
      ],
      coverImage: "/images/love-in-air/07.jpg",
      featured: false,
      order: 6,
    },
    {
      slug: "mens-shirt",
      title: "Classic Men's Shirt Redesign",
      season: "Fall",
      year: "2023",
      description: "A deconstruction of the classic men's dress shirt — bishop sleeves, V-shaped ribbed yoke, pointed collar.",
      story: "The men's dress shirt — the most codified garment in the masculine wardrobe — reimagined without apology. Bishop sleeves billow where cuffs once strangled. A V-shaped ribbed knit yoke bisects the chest like a modernist painting. The pointed collar remains, a knowing nod to convention. Suiting fabric meets ribbed knit; tradition meets disruption.",
      materials: ["Suiting fabric", "Ribbed knit", "Mother-of-pearl buttons", "Cotton interfacing"],
      palette: ["#C8BEA8", "#A09070", "#6b5d4f", "#1a1a1a"],
      images: [
        "/images/mens-shirt/01.jpg",
        "/images/mens-shirt/02.jpg",
        "/images/mens-shirt/03.jpg",
        "/images/mens-shirt/04.jpg",
        "/images/mens-shirt/05.jpg",
      ],
      coverImage: "/images/mens-shirt/04.jpg",
      featured: false,
      order: 7,
    },
  ];

  await Collection.insertMany(collections);

  const research = [
    {
      slug: "dune-power-femininity",
      title: "Dune: Power, Femininity & Futurism",
      collection: "Princess Irulan Redesign",
      description: "Exploring how science fiction constructs female power — and how fashion can translate that into wearable form.",
      content: "The figure of Princess Irulan in Frank Herbert's Dune occupies a uniquely ambiguous position of power: politically central yet narratively marginal, regal yet constrained. This research explores how her silhouette — always immaculate, always armoured — became the conceptual foundation for the collection. References drawn from Byzantine court dress, medieval chainmail, and the futurist aesthetic of early concept art for Villeneuve's 2021 film adaptation.",
      images: ["/images/princess-irulan/01.jpg", "/images/princess-irulan/02.jpg", "/images/princess-irulan/03.jpg"],
      published: true,
    },
    {
      slug: "life-cycles-natural-decay",
      title: "Life Cycles & Natural Decay in Fashion",
      collection: "Fallen Garden",
      description: "How the Japanese philosophy of wabi-sabi — finding beauty in imperfection and transience — shaped a collection about flowers dying in the night.",
      content: "Fallen Garden began with a simple observation: the most beautiful moment of a flower is not its peak bloom but the instant before it falls. This research surveys artists and designers who have engaged with decay as aesthetic: Vanitas still-life painters, Alexander McQueen's 'Sarabande' collection, the rotting fruit photography of Maciej Zaborski. The collection's four looks map directly onto four stages of botanical decay.",
      images: ["/images/fallen-garden/02.jpg", "/images/fallen-garden/03.jpg", "/images/fallen-garden/04.jpg"],
      published: true,
    },
    {
      slug: "sustainability-fabric-manipulation",
      title: "Sustainability & Fabric Manipulation",
      collection: "Tarchi Recycled Vests",
      description: "On the possibilities that open up when constraint — working only with discarded materials — becomes the creative engine.",
      content: "The Tarchi Recycled Vests project emerged from a very practical constraint: 5 kilograms of upholstery fabric that a furniture workshop was about to discard. This research documents the process of transforming waste into wearable objects, drawing on the traditions of Japanese boro textiles, Maison Margiela's deconstruction approach, and the growing slow fashion movement in Iran.",
      images: ["/images/tarchi-vests/02.jpg", "/images/tarchi-vests/03.jpg", "/images/tarchi-vests/04.jpg"],
      published: true,
    },
    {
      slug: "protest-art-persian-identity",
      title: "Protest Art, Graffiti & Persian Identity",
      collection: "Graphiti T-Shirts",
      description: "The intersection of street art, calligraphy, and political expression in contemporary Iranian visual culture.",
      content: "The Graphiti T-Shirts project sits at the intersection of several visual traditions: the revolutionary energy of Latin American street art, the ancient authority of Persian Nastaliq script, and the Warholian democratisation of art through mass-production. The calligraphy — drawn by Giti's father — connects the contemporary to the ancestral, making each shirt a dialogue across generations.",
      images: ["/images/graphiti-tshirts/02.jpg", "/images/graphiti-tshirts/03.jpg", "/images/graphiti-tshirts/05.jpg"],
      published: true,
    },
  ];

  await Research.insertMany(research);

  return NextResponse.json({
    success: true,
    collections: collections.length,
    research: research.length,
    message: "Database seeded successfully",
  });
}
