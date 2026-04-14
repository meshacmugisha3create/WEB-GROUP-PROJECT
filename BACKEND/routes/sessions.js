import express from "express";
import pool from "../db.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE SESSION
router.post("/", auth, async (req, res) => {
  const { date, time, location, description, group_id } = req.body;

  await pool.query(
    "INSERT INTO sessions (date, time, location, description, group_id) VALUES (?, ?, ?, ?, ?)",
    [date, time, location, description, group_id]
  );

  res.json({ message: "Session created" });
});

export default router;
