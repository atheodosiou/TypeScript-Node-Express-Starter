import { Router, Request, Response, NextFunction } from 'express';
import { HttpException } from '../../models/httpException.model';

const router = Router();

router.get('/example', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('v1 example request');
});

export { router };