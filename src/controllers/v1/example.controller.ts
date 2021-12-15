import { Request, Response } from 'express';

const exampleHandler = (req: Request, res: Response) => {
    res.status(200).send('v1 example request');
};

export { exampleHandler };
