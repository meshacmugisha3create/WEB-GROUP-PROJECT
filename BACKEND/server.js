import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import groupRoutes from "./routes/groups.js";
import sessionRoutes from "./routes/sessions.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});
