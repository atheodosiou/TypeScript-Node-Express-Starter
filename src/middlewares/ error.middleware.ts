import {
    Request,
    Response,
    // NextFunction
} from 'express';
import { HttpException } from '../models/httpException.model';

const failSaveHandler = (
    error: HttpException,
    req: Request,
    res: Response
    // next: NextFunction
) => {
    return res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message || 'Something went wrong',
    });
};

export { failSaveHandler };
