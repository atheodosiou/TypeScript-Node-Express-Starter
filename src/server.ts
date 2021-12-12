// import express from 'express';
import { dotenvExists } from './utils/common/checkDotEnv';
import { logger } from './utils/logger/logger';
import { gessProductionMode } from './config/environment';
if (!dotenvExists('.env')) {
    logger.error('Application will be terminated');
    process.exit(1);
}

const environment = gessProductionMode() ? 'production' : 'development';
logger.info('Environment: '+environment);
console.log('Working');
