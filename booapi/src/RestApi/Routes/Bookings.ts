import { Router, Request, Response } from 'express';
import * as bookingController from '../Controllers/booking';

const bookingRouter = Router();

bookingRouter.get('/', async (req: Request, res: Response) => {
    const results = await bookingController.getAll();
    return res.status(200).send(results);
})

export default bookingRouter;