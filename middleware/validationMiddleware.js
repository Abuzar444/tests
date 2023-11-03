import { body, param, validationResult } from 'express-validator';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../error/customError.js';
import mongoose from 'mongoose';
import Exercise from '../models/ExerciseModel.js';
import User from '../models/UserModel.js';
import { comparePassword } from '../utils/utils.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        const firstMessage = errorMessages[0];
        console.log(Object.getPrototypeOf(firstMessage));
        if (errorMessages[0].startsWith('no exercise')) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route');
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateCreateExerciseInput = withValidationErrors([
  body('exerciseName').notEmpty().withMessage(' Exercise name is required').custom(async (exerciseName, { req }) => {
    const { id: userId } = req.user;
    const exercise = await Exercise.findOne({ exerciseName, createdBy: userId });
    if (exercise) {
      throw new BadRequestError(' Exercise already exists');
    }
  }).withMessage(' Exercise already exists'),
  body('set').notEmpty().withMessage('set is required').isInt().withMessage(' Set must be a number').custom(async (set) => {
    if (set <= 0) {
      throw new BadRequestError(' Set must be greater than 0');
    }
  }),
  body('reps').notEmpty().withMessage('reps is required').isInt().withMessage(' Reps must be a number').custom(async (reps) => {
    if (reps <= 0) {
      throw new BadRequestError(' Reps must be greater than 0');
    }
  }),
  body('weight').notEmpty().withMessage('weight is required').isNumeric().withMessage(' Weight must be a number').custom(async (weight) => {
    if (weight <= 0) {
      throw new BadRequestError(' Weight must be greater than 0');
    }
  }),
]);

export const validateUpdateExerciseInput = withValidationErrors([
  body('set').notEmpty().withMessage('set is required').isInt().withMessage(' Set must be a number'),
  body('reps').notEmpty().withMessage('reps is required').isInt().withMessage(' Reps must be a number'),
  body('weight').notEmpty().withMessage('weight is required').isNumeric().withMessage(' Weight must be a number'),
]);

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError(' Invalid MongoDB id');
    const exercise = await Exercise.findById(value);
    if (!exercise) throw new NotFoundError(` No exercise with id ${value}`);
    const isAdmin = req.user.role === 'admin';
    const isOwner = req.user.id === exercise.createdBy.toString();

    if (!isAdmin && !isOwner)
      throw new UnauthorizedError('not authorized to access this route');
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage(' Name is required'),
  body('email')
    .notEmpty()
    .withMessage(' Email is required')
    .isEmail()
    .withMessage(' Invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError(' Email already exists');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage(' Password is required')
    .isLength({ min: 8 })
    .withMessage(' Password must be at least 8 characters long'),
  body('height').notEmpty().withMessage(' Height is required').isNumeric().withMessage(' Height must be a number'),
  body('weight').notEmpty().withMessage(' Weight is required').isNumeric().withMessage(' Weight must be a number'),
]);

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage(' Email is required')
    .isEmail()
    .withMessage(' Invalid email format'),
  body('password').notEmpty().withMessage(' Password is required'),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('height').notEmpty().withMessage('height is required').isNumeric().withMessage(' Height must be a number').custom(async (height) => {
    if (height <= 0) {
      throw new BadRequestError(' Height must be greater than 0');
    }
  }),
]);

export const validateUpdatePasswordInput = withValidationErrors([
  body('oldPassword').notEmpty().withMessage(' Old password is required').custom(async (oldPassword, { req }) => {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    const isMatch = await comparePassword(oldPassword, user.password);
    if (!isMatch) {
      throw new BadRequestError(' Old password is incorrect');
    }
  }),
  body('newPassword')
    .notEmpty()
    .withMessage(' New password is required')
    .isLength({ min: 8 })
    .withMessage(' New password must be at least 8 characters long'),

]);

export const validateForgotPasswordInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage(' Email is required')
    .isEmail()
    .withMessage(' Invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new BadRequestError(' Email does not exist');
      }
    }),
]);
