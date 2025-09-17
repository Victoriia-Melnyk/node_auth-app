'use strict';

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authRouter } from './routes/auth.route.js';
import { userRouter } from './routes/user.route.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_HOST || 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(authRouter);
app.use(userRouter);

app.listen(PORT, () => {
  'server is running...';
});
