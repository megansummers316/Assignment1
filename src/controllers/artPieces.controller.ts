import express, {Request, Response, Router} from "express";

import ArtPieces from "../models/artPiece.model.js";

const router: Router = express.Router();

// GET all
router.get('/', async (req: Request, res: Response) => {
    const artPieces = await ArtPieces.find();

    if (artPieces.length === 0) return res.status(400).json({ err: "No art found." });
    return res.status(200).json(artPieces);
});

// GET one
router.get('/:id', async (req: Request, res: Response) => {
    const artPiece = await ArtPieces.findById(req.params.id);

    if (artPiece == null) return res.status(404).json({ err: 'Art not found' });
    return res.status(200).json(artPiece);
});

// POST: create new art piece
router.post('/', async (req: Request, res: Response) => {
    if (!req.body) return res.status(400).json({ err: 'Invalid Request Body' });
    await ArtPieces.create(req.body);
    return res.status(201).json(); //201: resource created
});

// PUT: update an art piece
router.put('/:id', async (req: Request, res: Response) => {
    const artPiece = await ArtPieces.findById(req.params.id);

    if (artPiece == null) return res.status(404).json({ err: 'Art Piece not found' });
    artPiece.set(req.body);
    await artPiece.save(req.body);
    return res.status(204).json({ msg: 'Art Piece updated' });
});

// DELETE: delete by id
router.delete('/:id', async (req: Request, res: Response) => {
    const artPiece = await ArtPieces.findById(req.params.id);
    if (artPiece == null) return res.status(404).json({ err: 'Art Piece not found' });
    await artPiece.deleteOne({ _id: req.params.id });
    return res.status(200).json(artPiece);
});

export default router; //makes public so other files can access