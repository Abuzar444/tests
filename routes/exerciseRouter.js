import { Router } from "express";
const router = Router();
import { getAllExercises, getExerciseById, updateExercise, createExercise, deleteExercise } from "../controllers/exerciseController.js";
import { validateCreateExerciseInput, validateIdParam, validateUpdateExerciseInput } from "../middleware/validationMiddleware.js";

router.route("/").get(getAllExercises).post(validateCreateExerciseInput, createExercise);
router.route("/:id").get(validateIdParam, getExerciseById).patch(validateUpdateExerciseInput, validateIdParam, updateExercise).delete(validateIdParam, deleteExercise);

export default router;