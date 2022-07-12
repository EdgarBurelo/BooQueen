import { Router } from "express";
import carRouter from "./Cars";
import officeRouter from "./Offices";
import bookingRouter from './Bookings';

const router = Router();

router.use('/car', carRouter);
router.use('/office', officeRouter);
router.use('/booking', bookingRouter);


export default router;