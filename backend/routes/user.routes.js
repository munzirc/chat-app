import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.get('/', protectRoute, userController.getUsersForSidebar)

export default router;