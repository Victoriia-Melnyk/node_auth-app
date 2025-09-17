import express from 'express';
import { userController } from '../controllers/user.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

import { catchErrors } from '../utils/catchErrors.js';

export const userRouter = new express.Router();

userRouter.get('/profile', authMiddleware, catchErrors(userController.getUser));
userRouter.patch('/profile/name', authMiddleware, userController.updateName);

userRouter.patch(
  '/profile/password',
  authMiddleware,
  userController.changePassword,
);

userRouter.patch(
  '/profile/email',
  authMiddleware,
  userController.requestEmailChange,
);

userRouter.get(
  '/profile/change-email/:token',
  authMiddleware,
  userController.changeEmail,
);
