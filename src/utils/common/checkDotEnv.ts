import dotenv from 'dotenv';
import fs from 'fs';

export function dotenvExists():boolean{
    if(!fs.existsSync('../../../.env')){
        console.log('No .env file found!');
        return false;
    }else{
        dotenv.config({path:'../../../.env'});
        return true;
    }
}