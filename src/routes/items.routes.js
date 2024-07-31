import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "items working",
    });
  } catch (e) {
    res.json({
      success: false,
      error: e.message,
    });
  }
});

export default router;
