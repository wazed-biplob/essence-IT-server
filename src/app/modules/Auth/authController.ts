import { Request, Response } from 'express';
import { catchAsync } from '../../utils/functions';
import { authServices } from './authServices';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const result = await authServices.createUser(userData);
  res.json({
    success: true,
    message: 'User Created successfully',
    data: result,
  });
});

export const authController = {
  createUser,
};
