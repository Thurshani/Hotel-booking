import { Router } from "express";
import User from "../models/User.js";
import { Webhook } from "svix";

const router = Router();

router.post("/", async (req, res) => {
    console.log("📝 Webhook handler called");
    try {
        // Check if webhook secret exists
        if (!process.env.CLERK_WEBHOOK_SECRET) {
            console.error("❌ CLERK_WEBHOOK_SECRET is not defined");
            return res.status(500).json({ success: false, message: "Webhook secret not configured" });
        }

        console.log("✅ Webhook secret found");
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        console.log("📤 Webhook headers:", headers);

        // Convert raw buffer to string for verification
        const body = req.body.toString();
        console.log("📦 Webhook body length:", body.length);
        
        // Verify the webhook
        const evt = whook.verify(body, headers);
        
        const { data, type } = evt;

        console.log("🎯 Webhook received:", type);
        console.log("👤 User data:", { id: data.id, email: data.email_addresses?.[0]?.email_address });

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: data.first_name + " " + data.last_name,
            image: data.image_url || "", // Add image field
        };

        switch (type) {
            case "user.created": {
                console.log("🆕 Creating user in database:", userData);
                const newUser = await User.create(userData);
                console.log("✅ User created successfully:", newUser._id);
                break;
            }
            case "user.updated": {
                console.log("🔄 Updating user in database:", userData);
                const updatedUser = await User.findByIdAndUpdate(data.id, userData);
                console.log("✅ User updated successfully:", updatedUser?._id);
                break;
            }
            case "user.deleted": {
                console.log("🗑️ Deleting user from database:", data.id);
                const deletedUser = await User.findByIdAndDelete(data.id);
                console.log("✅ User deleted successfully:", deletedUser?._id);
                break;
            }
            default:
                console.log("❓ Unhandled webhook type:", type);
                break;
        }
        
        console.log("✅ Webhook processed successfully");
        res.json({ success: true, message: "Webhook Received" });
    } catch (error) {
        console.error("❌ Webhook error:", error.message);
        console.error("❌ Error stack:", error.stack);
        res.status(400).json({ success: false, message: error.message });
    }
});

export default router;