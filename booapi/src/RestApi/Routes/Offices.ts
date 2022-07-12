import { Router, Request, Response } from 'express';
import * as officeController from '../Controllers/office';
import { createUserOfficeDTO } from "../dto/office.dto";

const officeRouter = Router();

officeRouter.get('/', async (req: Request, res: Response) => {
    const results = await officeController.getAll();

    return res.status(200).send(results);
})

officeRouter.post('/book/', async (req: Request, res: Response) => {
    const payload:createUserOfficeDTO = req.body;
    const newOfficeBooking = await officeController.create(payload);

    return res.status(200).send(newOfficeBooking);
})

export default officeRouter;