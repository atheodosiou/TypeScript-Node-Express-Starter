import { Router } from 'express';
import { v1Controllers } from '../../controllers/index';

const router = Router();

router.get('/example', v1Controllers.exampleHandler);

export { router };
