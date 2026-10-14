import express, {Request, Response, Router} from "express";

import Assess from "../models/assessment.model.js";

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const assessments = await Assess.find();
    return res.status(200).json(assessments);
})