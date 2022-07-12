import { Router, Request, Response } from 'express';
import * as carController from '../Controllers/car';
import {createUserCarDTO} from "../dto/car.dto";

const carRouter = Router();

carRouter.get('/', async (req: Request, res: Response) => {
    const results = await carController.getAll();
    return res.status(200).send(results);
})

carRouter.post('/book/', async (req: Request, res: Response) => {
    const payload:createUserCarDTO = req.body;
    const newCarBooking = await carController.create(payload);


    return res.status(200).send(newCarBooking);
})

export default carRouter;