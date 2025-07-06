import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { create, getAllQuestions, getBySlug } from '../controllers/question.controller';
import { createComment, createQuestion } from '../validators';
import { validSchema } from '../middleware/valid-schema.middleware';

const router = Router();

router.get('/api/question/all', getAllQuestions);
router.post('/api/question/create', [authMiddleware, validSchema(createQuestion)], create);
router.get('/api/question/:slug', authMiddleware, getBySlug);
router.post('/api/question/comment', [authMiddleware, validSchema(createComment)], create);


export default router;
