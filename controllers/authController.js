import User from "../models/UserModel.js"
import StatusCodes from "http-status-codes";
import { UnauthenticatedError } from "../error/customError.js";
import { comparePassword, createJWT, hashPassword } from "../utils/utils.js";
import { generate } from "generate-password";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";


export const register = async (req, res) => {
  const { name, email, password, height, weight } = req.body;
  const hashedPassword = await hashPassword(password);

  const isFirst = await User.countDocuments({}) === 0;

  const role = isFirst ? "admin" : "user";

  const date = new Date().toLocaleDateString();

  const userObj = {
    name,
    email,
    password: hashedPassword,
    height,
    weights: { [date]: weight },
    role
  };

  await User.create(userObj);

  res.status(StatusCodes.CREATED).json({ msg: 'User created' });
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const userExists = user && (await comparePassword(password, user.password));
  console.log(userExists);
  if (!userExists) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const cookie = createJWT({ id: user._id, role: user.role });

  const oneDay = 24 * 60 * 60 * 1000;

  res.cookie("token", cookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + oneDay),
  });
  console.log(res)
  res.status(StatusCodes.OK).json({ msg: 'User logged in' });
};


export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.status(StatusCodes.OK).json({ msg: 'User logged out' });
};

export const forgotPassword = async (req, res) => {

  const { email } = req.body;

  const randomPassword = generate({
    length: 10,
    numbers: true,
  });

  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  }));


  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: 'Reset Password FitTrack',
    text: `Your new password is ${randomPassword}. Please login and change your password.`,
  };

  const hashedPassword = await hashPassword(randomPassword);

  await User.findOneAndUpdate({ email }, { password: hashedPassword });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Email sending failed' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(StatusCodes.OK).json({ msg: 'Password reset email sent successfully' });
    }
  });

};



