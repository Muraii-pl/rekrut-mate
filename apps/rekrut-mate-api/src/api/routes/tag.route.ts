
import router from './auth.route';
import { getAllTags } from '../controllers/tag.controller';

router.get('/api/tag/all', getAllTags);



export default router;
