import express from "express";
import pool from "../db.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE GROUP
router.post("/", auth, async (req, res) => {
  const { name, course, description, location } = req.body;

  await pool.query(
    "INSERT INTO groups (name, course, description, location, leader_id) VALUES (?, ?, ?, ?, ?)",
    [name, course, description, location, req.user.id]
  );

  res.json({ message: "Group created" });
});

// GET ALL GROUPS
router.get("/", async (req, res) => {
  const [groups] = await pool.query("SELECT * FROM groups");
  res.json(groups);
});

export default router;
