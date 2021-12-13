import { router as v1Router } from './v1/example.routes';
import { router as v2Router } from './v2/example.routes';
import { Router } from 'express';

const rootRouter = Router();

rootRouter.use('/v1', v1Router);
rootRouter.use('/v2', v2Router);

export { rootRouter };
