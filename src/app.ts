import express from 'express';
import { configureExpressApp } from './config/express';
import { dotenvExists } from './utils/common/checkDotEnv';
import { logger } from './utils/logger/logger';
import { rootRouter } from './routes/index.routes';
import { failSaveHandler } from './middlewares/ error.middleware';
import { HttpException } from './models/httpException.model';
import { connectToDb } from './utils/db/database';

const app = express();
const windowMs = 15 * 60 * 1000; //15 minutes

logger.info('Starting application...');

if (!dotenvExists('.env')) {
    logger.error('Application will be terminated');
    process.exit(1);
}

if (!process.env.MONGODB_URI) {
    logger.error('Can not find "MONGODB_URI". Application will be terminated');
    process.exit(1);
}

//MongoDB connection
connectToDb(process.env.MONGODB_URI);

//Express Configuration
configureExpressApp(app, true, windowMs, 100);

app.use(express.json());

app.use('/api', rootRouter);

app.use(
    '/',
    (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        next(new HttpException(404, 'Requested resurse not found.'));
    }
);

//Error handling
app.use(failSaveHandler);

//TODO: Add swagger

export { app };
