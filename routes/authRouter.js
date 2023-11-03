import { login, logout, register, forgotPassword } from "../controllers/authController.js";
import { Router } from "express";
import { validateLoginInput, validateRegisterInput, validateForgotPasswordInput } from "../middleware/validationMiddleware.js";

const router = Router();


router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);
router.post("/forgot-password", validateForgotPasswordInput, forgotPassword);

export default router;