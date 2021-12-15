import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../../models/httpException.model';
import { HttpClient } from '../../utils/common/http/httpClient';

const exampleHandler = (req: Request, res: Response) => {
    res.status(200).send('v1 example request');
};

const getBooksHandler = (req: Request, res: Response, next: NextFunction) => {
    const client = new HttpClient('https://jsonplaceholder.typicode.com');

    client
        .get('/users')
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((error) => {
            console.log(error.response);
            next(
                new HttpException(
                    error.status || 400,
                    error.message || 'Bad request'
                )
            );
        });
};

export { exampleHandler, getBooksHandler };
