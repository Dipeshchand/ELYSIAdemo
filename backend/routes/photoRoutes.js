import express from "express";
import Album from "../models/Album.js";
import Photo from "../models/Photo.js";

const router = express.Router();

/* ================= GET PHOTOS BY ALBUM SLUG ================= */

router.get("/album/:slug", async (req, res) => {
  try {
    // find album using slug
    const album = await Album.findOne({
      slug: req.params.slug,
    });

    if (!album) {
      return res.status(404).json({
        error: "Album not found",
      });
    }

    // fetch photos using albumId
    const photos = await Photo.find({
      albumId: album._id,
    }).sort({ createdAt: -1 });

    res.json(photos);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});

export default router;