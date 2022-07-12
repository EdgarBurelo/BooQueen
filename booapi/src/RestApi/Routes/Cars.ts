import { Router, Request, Response } from 'express';
import * as carController from '../Controllers/car';

const carRouter = Router();

carRouter.get('/', async (req: Request, res: Response) => {
    const results = await carController.getAll();
    return res.status(200).send(results);
})

export default carRouter;