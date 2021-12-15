import { Request, Response, NextFunction } from 'express';

const exampleHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('v2 example request');
};

export { exampleHandler };
