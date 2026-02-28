import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  coverUrl: String,
  coverPublicId: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Album", AlbumSchema);
