import express from "express";
import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  const admin = await Admin.create(req.body);
  res.json(admin);
});

router.post("/login", async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin) return res.status(401).json({ error: "Invalid login" });

  const ok = await bcrypt.compare(req.body.password, admin.password);
  if (!ok) return res.status(401).json({ error: "Invalid login" });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token });
});

export default router;
