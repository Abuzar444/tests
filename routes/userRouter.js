import { Router } from "express";
const router = Router();

import { getUser, updateUser, applicationStats, deleteUser, resetPassword, updateWeights } from "../controllers/userController.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
import { validateUpdateUserInput, validateUpdatePasswordInput } from "../middleware/validationMiddleware.js";


router.route("/").get(getUser).patch(validateUpdateUserInput, updateUser).delete(deleteUser);
router.route("/reset-password").patch(validateUpdatePasswordInput, resetPassword);
router.route("/admin").get(authorizePermissions, applicationStats);
router.route("/update-weights").patch(updateWeights);

export default router;