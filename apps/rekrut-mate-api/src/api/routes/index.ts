import authRoute from './auth.route';
import { Router } from 'express';
import questionRoute from './question.route';
import tagRoute from './tag.route';
import commentRoute from './comment.route';

export const router = Router();

router.get('/live', (req, res) => {
  res.sendStatus(200)
});

router.use(authRoute);
router.use(questionRoute);
router.use(tagRoute);
router.use(commentRoute);
