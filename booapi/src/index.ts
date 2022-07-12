import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './RestApi/Routes';
import dbInit from "./Database/init";
import cors from 'cors';

dotenv.config();

dbInit();
const port = process.env.PORT;

export const start = () => {
    const app: Express = express();

    app.use(express.json());
    app.use(cors({ origin: '*' }))
    app.use(express.urlencoded({ extended: true }));
    app.use('/api/', routes);

    try {
        app.listen(port, async () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
        });
    } catch (error: any) {
        console.log(`An Error Ocurred: ${error.message}`)
    }
}

start();
