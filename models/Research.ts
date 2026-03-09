import mongoose, { Schema } from "mongoose";

const ResearchSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: String,
  collection: String,
  description: String,
  content: String,
  images: [String],
  published: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Research || mongoose.model("Research", ResearchSchema);
