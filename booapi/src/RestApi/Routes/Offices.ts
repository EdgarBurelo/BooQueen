import { Router, Request, Response } from 'express';
import * as officeController from '../Controllers/office';

const officeRouter = Router();

officeRouter.get('/', async (req: Request, res: Response) => {
    const results = await officeController.getAll();
    return res.status(200).send(results);
})

export default officeRouter;