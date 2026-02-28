import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import albumRoutes from "./routes/album.js";
import uploadRoutes from "./routes/upload.js";
import authRoutes from "./routes/auth.js";
import photoRoutes from "./routes/photoRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/albums", albumRoutes);
app.use("/upload", uploadRoutes);
app.use("/auth", authRoutes);
app.use("/photos", photoRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err =>console.error(err));

app.listen(5000, ()=>{
    console.log("Backend running on port 5000");
});