import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("✅ Database Connected"));
        mongoose.connection.on('error', (err) => console.error("❌ Database Connection Error:", err));
        mongoose.connection.on('disconnected', () => console.log("⚠️ Database Disconnected"));
        
        console.log("🔄 Attempting to connect to MongoDB...");
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
        console.log("📊 Connected to database: hotel-booking");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
    }
}

export default connectDB;

