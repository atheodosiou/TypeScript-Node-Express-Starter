import express from 'express';
import { configureExpressApp } from './config/express';
import { dotenvExists } from './utils/common/checkDotEnv';
import { logger } from './utils/logger/logger';

const app = express();

logger.info('Starting application...');

if (!dotenvExists('.env')) {
    logger.error('Application will be terminated');
    process.exit(1);
}

//Express Configuration
const windowMs = 15*60*1000; //15 minutes
configureExpressApp(app,true,windowMs,100);



export { app };
