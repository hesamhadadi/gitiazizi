import { connectDB } from "@/lib/db";
import Collection from "@/models/Collection";
import Research from "@/models/Research";

export interface PublicCollection {
  slug: string;
  title: string;
  season?: string;
  year?: string;
  description?: string;
  story?: string;
  materials: string[];
  palette: string[];
  images: string[];
  coverImage?: string;
  featured?: boolean;
  order?: number;
  tag?: string;
}

export interface PublicResearch {
  slug: string;
  title: string;
  collection?: string;
  description?: string;
  content?: string;
  images: string[];
  createdAt?: string;
}

function asTag(collection: PublicCollection) {
  const hasSeason = Boolean(collection.season || collection.year);
  if (!hasSeason) return "Collection";
  return [collection.season, collection.year].filter(Boolean).join(" ");
}

export async function getPublishedCollections(): Promise<PublicCollection[]> {
  await connectDB();
  const docs: any[] = await Collection.find({ published: true }).sort({ order: 1, createdAt: -1 }).lean();

  return docs.map((doc: any) => ({
    slug: doc.slug,
    title: doc.title,
    season: doc.season,
    year: doc.year,
    description: doc.description,
    story: doc.story,
    materials: doc.materials || [],
    palette: doc.palette || [],
    images: doc.images || [],
    coverImage: doc.coverImage,
    featured: doc.featured,
    order: doc.order,
    tag: asTag(doc),
  }));
}

export async function getPublishedCollectionBySlug(slug: string): Promise<PublicCollection | null> {
  await connectDB();
  const doc: any = await Collection.findOne({ slug, published: true }).lean();
  if (!doc) return null;

  return {
    slug: doc.slug,
    title: doc.title,
    season: doc.season,
    year: doc.year,
    description: doc.description,
    story: doc.story,
    materials: doc.materials || [],
    palette: doc.palette || [],
    images: doc.images || [],
    coverImage: doc.coverImage,
    featured: doc.featured,
    order: doc.order,
    tag: asTag(doc as any),
  };
}

export async function getPublishedResearch(): Promise<PublicResearch[]> {
  await connectDB();
  const docs: any[] = await Research.find({ published: true }).sort({ createdAt: -1 }).lean();

  return docs.map((doc: any) => ({
    slug: doc.slug,
    title: doc.title,
    collection: doc.collection,
    description: doc.description,
    content: doc.content,
    images: doc.images || [],
    createdAt: doc.createdAt?.toISOString?.() || undefined,
  }));
}

export async function getPublishedResearchBySlug(slug: string): Promise<PublicResearch | null> {
  await connectDB();
  const doc: any = await Research.findOne({ slug, published: true }).lean();
  if (!doc) return null;

  return {
    slug: doc.slug,
    title: doc.title,
    collection: doc.collection,
    description: doc.description,
    content: doc.content,
    images: doc.images || [],
    createdAt: doc.createdAt?.toISOString?.() || undefined,
  };
}
