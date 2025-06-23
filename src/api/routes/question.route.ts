import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { create, getAllQuestions, getBySlug } from '../controllers/question.controller';
import { createQuestion } from '../validators/create-question.validator';
import { validSchema } from '../middleware/valid-schema.middleware';

const router = Router();

router.get('/api/question/all', authMiddleware, getAllQuestions);
router.post('/api/question/create', [authMiddleware, validSchema(createQuestion)], create);
router.get('/api/question/:slug', authMiddleware, getBySlug);


export default router;
