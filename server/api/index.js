import express from "express";
import connectDB from "../configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "../controllers/clerkWebhooks.js";

const app = express();

app.use(clerkMiddleware());
app.use(express.json());

// Connect to DB
// Since Vercel serverless functions cold-start, better to connect once per function invocation
await connectDB();

// Routes
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("🏨 API is working");
});

export default app;
