import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
connectDB();

// Middlewares
app.use(clerkMiddleware());
app.use(express.json());

//Api to listen to clerk webhooks
app.use("/api/clerk",clerkWebhooks)

// Test Route
app.get("/", (req, res) => {
  res.send("🏨 API is working");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
