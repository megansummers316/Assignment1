import express, {Request, Response, Router} from "express";

import ArtPieces from "../models/artPiece.model.js";

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const artPieces = await ArtPieces.find();
    return res.status(200).json(artPieces);
})