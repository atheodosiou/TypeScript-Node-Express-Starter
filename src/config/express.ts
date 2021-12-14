import express, { Express } from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { logger } from '../utils/logger/logger';
import { serve, setup } from 'swagger-ui-express';
import swaggerDoc from '../config/swagger.json';

const configureExpressApp = (
    app: Express,
    enableRateLimit?: boolean,
    windowMs?: number,
    maxRequestsPerWindow?: number
): void => {
    let limiter: rateLimit.RateLimit;

    app.set('port', process.env.PORT || 3000);

    app.use(morgan('combined'));
    app.use(helmet());
    app.use(cors());

    if (enableRateLimit) {
        limiter = rateLimit({
            windowMs: windowMs,
            max: maxRequestsPerWindow,
        });

        app.use(limiter);
        logger.info('App has reate limit enabled');
    }

    app.use(
        express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
    );

    app.use('/api-docs', serve);
    app.get('/api-docs', setup(swaggerDoc));
};

export { configureExpressApp };
