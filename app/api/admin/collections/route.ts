import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import Collection from "@/models/Collection";

export async function GET() {
  await connectDB();
  const collections = await Collection.find({}).sort({ order: 1 });
  return NextResponse.json(collections);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const data = await req.json();
  const collection = await Collection.create(data);
  return NextResponse.json(collection);
}
