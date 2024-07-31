// users.routes.js
import express from "express";
import { generateAccessToken, authenticateToken } from "../middleware/auth.js";
import { Users } from "../Models/users.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const existingUser = await Users.findOne({
      username: req.body.username,
    });

    if (existingUser) {
      return res.json({
        success: false,
        message: "user already exists",
      });
    }

    const user = new Users({
      username: req.body.username,
      password: req.body.password,
    });

    await user.save();
    res.json({
      success: true,
      message: "register working",
    });
  } catch (e) {
    res.json({
      success: false,
      error: e.message,
    });
  }
});

router.post("/signin", authenticateToken, async (req, res) => {
  try {
    const user = await Users.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.json({
        success: false,
        message: "user not found",
      });
    }

    res.json({
      success: true,
      message: "login working",
    });
  } catch (e) {
    res.json({
      success: false,
      error: e.message,
    });
  }
});

export default router;
