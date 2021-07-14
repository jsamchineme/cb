import { Router } from 'express';
import authRouter from 'src/modules/auth/router';

const baseRouter = Router();

baseRouter.use('/users', authRouter);

export default baseRouter;
