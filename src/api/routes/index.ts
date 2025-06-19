import authRoute from './auth.route';
import { Router } from 'express';

export const router = Router();

router.get('/live', (req, res) => {
  res.sendStatus(200)
});

router.use(authRoute);
