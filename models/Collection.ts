import mongoose, { Schema } from "mongoose";

const CollectionSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  season: String,
  year: String,
  description: String,
  story: String,
  materials: [String],
  palette: [String],
  images: [String],
  coverImage: String,
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Collection || mongoose.model("Collection", CollectionSchema);
