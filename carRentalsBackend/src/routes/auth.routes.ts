import { Router } from "express";
import {
  register,
  login,
  
} from "../controllers/auth.controller.js";
import { sendOtpController, verifyOtpController } from "../controllers/otp.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/send-otp", sendOtpController);
router.post("/verify-otp", verifyOtpController);

export default router;