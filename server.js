import 'express-async-errors'
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import morgan from 'morgan';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import exceriseRouter from './routes/exerciseRouter.js';
import cookieParser from 'cookie-parser';
import errorHandlerMiddleware from './middleware/errorMiddleware.js';
import { userAuthentication } from './middleware/authMiddleware.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/dist')));
app.use(cookieParser());
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// commit
const port = process.env.PORT || 5000;

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userAuthentication, userRouter);
app.use("/api/v1/exercise", userAuthentication, exceriseRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
app.use(errorHandlerMiddleware);

try {
  mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}



