import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    enum: ["user", "admin"],
    type: String,
    default: "user",
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  height: {
    type: Number,
    min: 0,
  },
  weights: Map,
},
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);


export default User;