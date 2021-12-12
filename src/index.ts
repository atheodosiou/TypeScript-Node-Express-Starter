import express from 'express';
import { dotenvExists } from './utils/common/checkDotEnv';

if (!dotenvExists()) {
    console.log('No .env file found! Application will be terminated\n');
    process.exit(1);
}

console.log(process.env.PORT);