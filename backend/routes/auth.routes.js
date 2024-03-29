import express from "express";
import AuthController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

export default router;
