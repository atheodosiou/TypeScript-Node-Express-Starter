import express from 'express';
import { configureExpressApp } from './config/express';
import { dotenvExists } from './utils/common/checkDotEnv';
import { logger } from './utils/logger/logger';
import { rootRouter } from './routes/index.routes';

const app = express();

logger.info('Starting application...');

if (!dotenvExists('.env')) {
    logger.error('Application will be terminated');
    process.exit(1);
}

//Express Configuration
const windowMs = 15*60*1000; //15 minutes
configureExpressApp(app,true,windowMs,100);

app.use('/api',rootRouter);

// app.use('**',(req:any,res:any,next:any)=>{
//     //Error Handling
// });


export { app };
