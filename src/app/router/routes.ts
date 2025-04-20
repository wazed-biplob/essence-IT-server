import { Router } from 'express';
import { authRoutes } from '../modules/Auth/authRoutes';

export const router = Router();

router.use('/auth', authRoutes);
