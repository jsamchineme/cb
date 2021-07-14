import { Router } from 'express';
import validateUserSignup from 'src/http/middlewares/requestValidations/userSignup';
import validateUserLogin from 'src/http/middlewares/requestValidations/userLogin';
import validateResetPassword from 'src/http/middlewares/requestValidations/resetPassword';
import wrapAsync from 'src/http/wrapAsync';
import { 
  userSignup, 
  userLogin,
} from './controller';
import verifyToken from 'src/http/middlewares/auth/verifyToken';

const authRouter = Router();

authRouter.post('/signup',
  // validateUserSignup,
  wrapAsync(userSignup));

authRouter.post('/token/obtain',
  // validateUserLogin,
  wrapAsync(userLogin));

export default authRouter;
