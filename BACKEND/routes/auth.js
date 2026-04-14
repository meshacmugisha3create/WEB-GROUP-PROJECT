import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const { firstName, secondName, program, year, username, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  await pool.query(
    "INSERT INTO users (firstName, secondName, program, year, username, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [firstName, secondName, program, year, username, email, hashed]
  );

  res.json({ message: "User registered" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

  if (rows.length === 0) return res.status(400).json({ message: "User not found" });

  const user = rows[0];

  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  res.json({ token });
});

export default router;
