import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
connectDB();

// Middlewares
app.use(cors());
app.use(clerkMiddleware());
app.use(express.json());

// API route for Clerk webhooks
app.use("/api/clerk", clerkWebhooks);

// Test route to confirm server is working
app.get("/", (req, res) => {
  res.send("🏨 API is working");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
