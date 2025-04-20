import { Router } from 'express';
import { authController } from './authController';

const router = Router();

router.post('/create-user', authController.createUser);

export const authRoutes = router;
