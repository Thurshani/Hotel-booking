import User from "../models/User.js";
import { Webhook } from "svix";
import connectDB from "../configs/db.js";

connectDB(); // Connect MongoDB once per function call

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address, // fix typo (email_addresses is array of objects)
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;
      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData);
        break;
      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;
      default:
        break;
    }

    res.json({ success: true, message: "Webhook Received" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ success: false, message: error.message });
  }
}
