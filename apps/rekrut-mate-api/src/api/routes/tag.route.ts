import { refreshUserSession } from '../controllers/auth.controller';

import router from './auth.route';

router.get('/api/tag/all', refreshUserSession);



export default router;
