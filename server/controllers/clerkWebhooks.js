import { Router } from "express";
import User from "../models/User.js";
import { Webhook } from "svix";

const router = Router();

router.post("/", async (req, res) => {
    try {
        // Check if webhook secret exists
        if (!process.env.CLERK_WEBHOOK_SECRET) {
            console.error("CLERK_WEBHOOK_SECRET is not defined");
            return res.status(500).json({ success: false, message: "Webhook secret not configured" });
        }

        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        // Convert raw buffer to string for verification
        const body = req.body.toString();
        
        // Verify the webhook
        const evt = whook.verify(body, headers);
        
        const { data, type } = evt;

        console.log("Webhook received:", type);

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: data.first_name + " " + data.last_name,
            image: data.image_url || "", // Add image field
        };

        switch (type) {
            case "user.created": {
                console.log("Creating user:", userData);
                await User.create(userData);
                break;
            }
            case "user.updated": {
                console.log("Updating user:", userData);
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }
            case "user.deleted": {
                console.log("Deleting user:", data.id);
                await User.findByIdAndDelete(data.id);
                break;
            }
            default:
                console.log("Unhandled webhook type:", type);
                break;
        }
        
        res.json({ success: true, message: "Webhook Received" });
    } catch (error) {
        console.error("Webhook error:", error.message);
        res.status(400).json({ success: false, message: error.message });
    }
});

export default router;