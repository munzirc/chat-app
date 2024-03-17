import express from "express";
import messageController from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id",protectRoute, messageController.getMessages);
router.post("/send/:id",protectRoute, messageController.sendMessage);

export default router;
