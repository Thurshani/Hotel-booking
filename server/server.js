import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";

connectDB()

const app = express();
app.use(cors());

// Raw body parsing for webhooks (must come before express.json())
app.use("/api/clerk", express.raw({ type: "application/json" }));

// JSON middleware for other routes
app.use(express.json())
app.use(clerkMiddleware())

app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => res.send("API is working"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
