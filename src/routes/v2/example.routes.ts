import { Router } from 'express';
import { v2Controllers } from '../../controllers/index';

const router = Router();

router.get('/example', v2Controllers.exampleHandler);

export { router };
