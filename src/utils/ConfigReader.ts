import dotenv from 'dotenv';

dotenv.config();

export const config = {
    url: process.env.APP_URL,
    username: process.env.APP_USERNAME,
    password: process.env.APP_PASSWORD
};