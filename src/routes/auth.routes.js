import express from "express";
const router = express.Router();
import { generateAccessToken } from "../middleware/auth.js";

router.post("/", async (req, res) => {
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

export default router;
