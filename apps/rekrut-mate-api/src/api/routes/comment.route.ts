import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { validSchema } from '../middleware/valid-schema.middleware';
import { createComment } from '../validators';
import { create, getReplies } from '../controllers/comment.controller';

const router = Router();

router.post('/api/comment/create', [authMiddleware, validSchema(createComment)], create);
router.get('/api/comment/replies', [authMiddleware, validSchema(createComment)], getReplies);


export default router;
