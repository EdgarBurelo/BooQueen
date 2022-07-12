import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './RestApi/Routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/', routes);

app.listen(port, async () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});