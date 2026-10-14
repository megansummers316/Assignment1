import express from "express";
import ArtPieces from "../models/artPiece.model.js";
const router = express.Router();
/**
 * @swagger
 * /api/v1/artPIeces:
 *   get:
 *     tags:
 *       - Art Pieces
 *     summary: Retrieve all art pieces
 *     responses:
 *       200:
 *         description: A list of art pieces
 *       404:
 *         description: No art pieces found
 */
router.get('/', async (req, res) => {
    const artPieces = await ArtPieces.find();
    if (artPieces.length === 0)
        return res.status(400).json({ err: "No art found." });
    return res.status(200).json(artPieces);
});
/**
 * @swagger
 * /api/v1/artPieces/{id}:
 *   get:
 *     tags:
 *       - Art Piece
 *     summary: Find art piece by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the selected art piece
 *       404:
 *         description: Art not found
 */
router.get('/:id', async (req, res) => {
    const artPiece = await ArtPieces.findById(req.params.id);
    if (artPiece == null)
        return res.status(404).json({ err: 'Art not found' });
    return res.status(200).json(artPiece);
});
/**
 * @swagger
 * /api/v1/artPieces:
 *   post:
 *     tags:
 *       - Art Piece
 *     summary: Add a new art piece
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - title
 *               - date
 *               - artist
 *             properties:
 *               name:
 *                 type: string
 *               title:
 *                 type: string
 *               date:
 *                 type: date
 *               artist:
 *                 type: string
 *     responses:
 *       201:
 *         description: Art Piece created
 *       400:
 *         description: Bad request
 */
router.post('/', async (req, res) => {
    if (!req.body)
        return res.status(400).json({ err: 'Invalid Request Body' });
    await ArtPieces.create(req.body);
    return res.status(201).json(); //201: resource created
});
/**
 * @swagger
 * /api/v1/artPieces/{id}:
 *   put:
 *     tags:
 *       - Art Piece
 *     summary: Update an art piece
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               title:
 *                 type: string
 *               date:
 *                 type: date
 *               artist:
 *                 type: string
 *     responses:
 *       204:
 *         description: Art Piece updated
 *       404:
 *         description: Art Piece not found
 */
router.put('/:id', async (req, res) => {
    const artPiece = await ArtPieces.findById(req.params.id);
    if (artPiece == null)
        return res.status(404).json({ err: 'Art Piece not found' });
    artPiece.set(req.body);
    await artPiece.save(req.body);
    return res.status(204).json({ msg: 'Art Piece updated' });
});
/**
 * @swagger
 * /api/v1/artPiece/{id}:
 *   delete:
 *     tags:
 *       - Art Piece
 *     summary: Delete selected art piece
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *         type: string
 *         required: true
 *     responses:
 *       204:
 *         description: Deletes selected art piece
 *       404:
 *         description: Art Piece not found
 */
router.delete('/:id', async (req, res) => {
    const artPiece = await ArtPieces.findById(req.params.id);
    if (artPiece == null)
        return res.status(404).json({ err: 'Art Piece not found' });
    await artPiece.deleteOne({ _id: req.params.id });
    return res.status(200).json(artPiece);
});
export default router; //makes public so other files can access
