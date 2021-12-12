import dotenv from 'dotenv';
import fs from 'fs';
import { logger } from '../logger/logger';

export function dotenvExists(file:string): boolean {
    if (!fs.existsSync(file)) {
        logger.error('No .env file found');
        return false;
    } else {
        dotenv.config({ path: file });
        logger.info('Using .env file to get config environment variables');
        return true;
    }
}
