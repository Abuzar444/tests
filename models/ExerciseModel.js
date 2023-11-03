import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  exerciseName: {
    type: String,
    required: true,
  },
  set: {
    type: Number,
    required: true,
    min: 1,
  },
  reps: {
    type: Number,
    required: true,
    min: 1
  },
  weight: {
    type: Number,
    required: true,
    min: 0,
  },

}, { timestamps: true });

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;