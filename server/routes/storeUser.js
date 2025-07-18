import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/store-user", async (req, res) => {
  try {
    const { id, email, username, image } = req.body;

    const existingUser = await User.findById(id);
    if (!existingUser) {
      await User.create({
        _id: id,
        email,
        username,
        image,
        role: "user",
        recentSearchedCities: [],
      });
    }

    res.json({ success: true, message: "User saved to MongoDB" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
