import { Request, Response, NextFunction } from 'express';

const exampleHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('v1 example request');
};

export { exampleHandler };
