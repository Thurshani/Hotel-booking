import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
import { createRoom, toggleRoomAvailability,  getRooms,getOwnerRooms  } from "../controllers/roomController.js";

const roomRouter =express.Router();

// ✅ FIXED POST ROUTE
roomRouter.post('/', protect, upload.array("images", 4), createRoom);

roomRouter.get('/',getRooms)
roomRouter.get('/owner',protect,getOwnerRooms)
roomRouter.get('/toggle-availability',protect,toggleRoomAvailability)

export default roomRouter;