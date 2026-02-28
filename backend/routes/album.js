import express from "express";
import Album from "../models/Album.js";
import Photo from "../models/Photo.js";
import multer from "multer";
import cloudinary from "../cloudinary.js";
import auth from "../middleware/auth.js";

const router = express.Router();

/* ================= MULTER ================= */

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 10 * 1024 * 1024 }
});

/* ================= PUBLIC ================= */

// Get all public albums
router.get("/public", async (req, res) => {
  const albums = await Album.find().sort({ createdAt: -1 });
  res.json(albums);
});

/* ✅ GET ALBUM COVER (IMPORTANT FIX) */
router.get("/:id/cover", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);

    if (!album || !album.coverUrl) {
      return res.status(404).json({
        error: "Cover not found"
      });
    }

    // redirect to cloudinary image
    res.redirect(album.coverUrl);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* ================= ADMIN ================= */

// Admin albums
router.get("/", auth, async (req, res) => {
  const albums = await Album.find().sort({ createdAt: -1 });
  res.json(albums);
});

/* CREATE ALBUM */
router.post("/", auth, async (req, res) => {
  try {
    const { title } = req.body;

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

    const exists = await Album.findOne({ slug });
    if (exists)
      return res.status(400).json({
        error: "Album already exists"
      });

    const album = await Album.create({ title, slug });

    res.json(album);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ✅ UPLOAD COVER (CRASH FIXED) */
router.post(
  "/:id/cover",
  auth,
  upload.single("image"),
  async (req, res) => {
    try {

      if (!req.file) {
        return res.status(400).json({
          error: "No file uploaded"
        });
      }

      const album = await Album.findById(req.params.id);

      // ✅ VERY IMPORTANT CHECK
      if (!album) {
        return res.status(404).json({
          error: "Album not found"
        });
      }

      const result =
        await cloudinary.uploader.upload(
          req.file.path,
          {
            folder: `covers/${album._id}`
          }
        );

      album.coverUrl = result.secure_url;
      album.coverPublicId = result.public_id;

      await album.save();

      res.json(album);

    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: err.message
      });
    }
  }
);

/* DELETE ALBUM */
router.delete("/:id", auth, async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);

    if (!album)
      return res.status(404).json({
        error: "Not found"
      });

    if (album.coverPublicId) {
      await cloudinary.uploader.destroy(
        album.coverPublicId
      );
    }

    const photos = await Photo.find({
      albumId: album._id
    });

    for (const p of photos) {
      await cloudinary.uploader.destroy(
        p.publicId
      );
    }

    await Photo.deleteMany({
      albumId: album._id
    });

    await Album.findByIdAndDelete(album._id);

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

export default router;