import User from "../models/UserModel.js";
import Exercise from "../models/ExerciseModel.js";
import StatusCodes from "http-status-codes";
import { hashPassword } from "../utils/utils.js";

export const getUser = async (req, res) => {
  const { id: userId } = req.user;

  const user = await User.findById(userId);

  delete user.password;
  const data = await fetch("https://zenquotes.io/api/today").then((res) => res.json());
  const quote = data[0].q;
  const author = data[0].a;

  res.status(StatusCodes.OK).json({ user, quote, author });
};

export const updateUser = async (req, res) => {
  const { id: userId } = req.user;

  await User.findByIdAndUpdate(userId, req.body);

  res.status(StatusCodes.OK).json({ msg: 'User updated successfully' });
};

export const applicationStats = async (req, res) => {

  const totalUsers = await User.count();
  const totalExercises = await Exercise.count();

  res.status(StatusCodes.OK).json({ totalUsers, totalExercises });

};

export const deleteUser = async (req, res) => {
  const { id: userId } = req.user;

  await User.findByIdAndDelete(userId);
  await Exercise.deleteMany({ createdBy: userId });


  // res.cookie("token", "", { expires: new Date(0) });
  res.status(StatusCodes.OK).json({ msg: 'User deleted successfully' });
}

export const resetPassword = async (req, res) => {
  const { newPassword } = req.body;
  const { id } = req.user;

  const hashedPassword = await hashPassword(newPassword);

  await User.findByIdAndUpdate(id, { password: hashedPassword });

  res.status(StatusCodes.OK).json({ msg: 'Password updated successfully' });
};

export const updateWeights = async (req, res) => {
  const { id } = req.user;
  const { date, weight } = req.body;

  const user = await User.findById(id);

  const weights = user.weights;

  weights.set(date, weight);

  await User.findByIdAndUpdate(id, { weights });

  res.status(StatusCodes.OK).json({ msg: 'Weight updated successfully' });
}