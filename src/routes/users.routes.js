import express from "express";
import { generateToken, verifyToken } from "../middleware/auth.js";
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
    const token = generateToken({
      name: "Stav Levi",
      email: "stav.levi@netnut.io",
      id: 1,
    });
    return res.status(200).json({ success: true, token });
  } catch (e) {
    res.json({
      success: false,
      error: e.message,
    });
  }
});

router.get("/me", verifyToken, (req, res) => {
  let token = req.query.token;
  if (token)
    res.json({
      success: true,
      message: "This is a protected route",
      user: req.user,
    });
});

export default router;
