import express from 'express';
import { authController } from '../controllers/auth.controller.js';
import { catchErrors } from '../utils/catchErrors.js';

export const authRouter = new express.Router();

authRouter.post('/registration', catchErrors(authController.register));

authRouter.get(
  '/activation/:activationToken',
  catchErrors(authController.activate),
);
authRouter.post('/login', catchErrors(authController.login));
authRouter.get('/refresh', catchErrors(authController.refresh));
authRouter.post('/logout', catchErrors(authController.logout));

authRouter.post(
  '/reset-password',
  catchErrors(authController.resetPasswordRequest),
);

authRouter.get(
  '/reset-password/:resetToken',
  catchErrors(authController.confirmPasswordChange),
);

authRouter.post(
  '/reset-password-confirm',
  catchErrors(authController.passwordChange),
);
