import express from "express";
import { generateAccessToken, authenticateToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "users working",
    });
  } catch (e) {
    res.json({
      success: false,
      error: e.message,
    });
  }
});

router.get("/login", async (req, res) => {
  try {
    const token = generateAccessToken({ username: "stav" });
    res.json({
      success: true,
      message: "login working",
      token: token,
    });
  } catch (e) {
    res.json({
      success: false,
      error: e.message,
    });
  }
});

router.get("/me", authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: "me working",
  });
});

export default router;
