import Exercise from "../models/ExerciseModel.js";
import StatusCodes from "http-status-codes";

export const getAllExercises = async (req, res) => {
  const { id } = req.user;
  const { search, sort, page, limit } = req.query;

  const query = { createdBy: id };

  if (search) {
    query.exerciseName = { $regex: search, $options: "i" };
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    'a-z': "exerciseName",
    'z-a': "-exerciseName",
  };

  const sortType = sortOptions[sort] || sortOptions.newest;

  const pageNo = Number(page) || 1;
  const limitNo = Number(limit) || 10;
  const skip = (pageNo - 1) * limitNo;

  const exercises = await Exercise.find(query).sort(sortType).skip(skip).limit(limitNo);

  const total = await Exercise.countDocuments(query);
  const numOfPages = Math.ceil(total / limitNo);


  res.status(StatusCodes.OK).json({ total, numOfPages, currentPage: pageNo, exercises });
};

export const getExerciseById = async (req, res) => {
  const { id } = req.params;

  const exercise = await Exercise.findById(id);
  res.status(StatusCodes.OK).json({ exercise });
};

export const createExercise = async (req, res) => {
  const { exerciseName, set, reps, weight } = req.body;

  const { id } = req.user;

  await Exercise.create({
    exerciseName,
    set,
    reps,
    weight,
    createdBy: id,
  });

  res.status(StatusCodes.CREATED).json({ msg: "Exercice created sucessfully" });
};

export const updateExercise = async (req, res) => {
  const { id } = req.params;

  const { id: userId } = req.user;

  await Exercise.findOneAndUpdate({ _id: id, createdBy: userId }, req.body);

  res.status(StatusCodes.OK).json({ msg: "Exercise updated sucessfully" });
};

export const deleteExercise = async (req, res) => {
  const { id } = req.params;

  await Exercise.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ msg: "Exercise deleted sucessfully" });
};

