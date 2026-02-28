import express from "express";
import multer from "multer";
import cloudinary from "../cloudinary.js";
import Photo from "../models/Photo.js";
import auth from "../middleware/auth.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 10 * 1024 * 1024 }
});

/* ----------- PUBLIC ----------- */

// Website → load album photos
router.get("/album/:albumId", async (req, res) => {
  const photos = await Photo.find({ albumId: req.params.albumId }).sort({ createdAt: -1 });
  res.json(photos);
});


/* ----------- ADMIN ----------- */

// Upload photo to album
router.post("/:albumId", auth, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file" });

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `albums/${req.params.albumId}`
    });

    const photo = await Photo.create({
      albumId: req.params.albumId,
      url: result.secure_url,
      publicId: result.public_id
    });

    res.json(photo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
