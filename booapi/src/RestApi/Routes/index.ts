import { Router } from "express";
import carRouter from "./Cars";
import officeRouter from "./Offices";

const router = Router();

router.use('/car', carRouter);
router.use('/office', officeRouter);


export default router;