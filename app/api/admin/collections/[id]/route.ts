import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import Collection from "@/models/Collection";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const doc = await Collection.findById(params.id);
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(doc);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const data = await req.json();
  const doc = await Collection.findByIdAndUpdate(params.id, data, { new: true });
  return NextResponse.json(doc);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  await Collection.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
