import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/example', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('v2 example request');
});

export { router };