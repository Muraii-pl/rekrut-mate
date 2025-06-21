import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { getAllQuestions } from '../controllers/question.controller';

const router = Router();

router.get('/api/question/all', authMiddleware, getAllQuestions);


export default router;
