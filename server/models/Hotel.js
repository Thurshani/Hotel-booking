import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String },
  owner: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Hotel", hotelSchema);
