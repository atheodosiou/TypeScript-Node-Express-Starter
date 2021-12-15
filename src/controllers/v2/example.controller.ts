import { Request, Response } from 'express';
// import { HttpException } from '../../models/httpException.model';

const exampleHandler = (req: Request, res: Response) => {
    res.status(200).send('v2 example request');
};

// const exampleHandler = (req: Request, res: Response, next: NextFunction) => {
//     //Throwing some error
//     next(new HttpException(400,'Bad Request'));
// };

export { exampleHandler };
