import express from "express";
import Assess from "../models/artPiece.model.js";
const router = express.Router();
router.get('/', async (req, res) => {
    const assessments = await Assess.find();
    return res.status(200).json(assessments);
});
