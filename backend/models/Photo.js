import mongoose from "mongoose";
const PhotoSchema = new mongoose.Schema({
    albumId:String,
    url:String,
    publicId: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Photo", PhotoSchema);