import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/protected", protect, (req, res) => {
  res.json({ message: `Hello, ${req.user.name}. You accessed a protected route.` });
});

export default router;
