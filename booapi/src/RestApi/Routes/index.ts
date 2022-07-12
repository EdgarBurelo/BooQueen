import { Router } from "express";
import carRouter from "./Cars";

const router = Router();

router.use('/car', carRouter);

export default router;