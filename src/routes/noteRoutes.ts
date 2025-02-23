import { Router } from "express";
import NoteController from "../controllers/noteController";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Note:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: Endpoints for note management
 */

/** 
 * @swagger
 * /getAll:
 *   get:
 *     summary: Retrieve all notes
 *     description: Get a list of all notes
 *     tags: [Notes]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 */ 
router.get("/getAll", NoteController.getAllNotes);

/** 
 * @swagger
 * /getById/{id}:
 *   get:
 *     summary: Get a note by ID
 *     description: Retrieve a specific note using its ID
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       404:
 *         description: Note not found
 */ 
router.get("/getById/:id", NoteController.getNoteById);

/** 
 * @swagger
 * /create:
 *   post:
 *     summary: Create a new note
 *     description: Add a new note to the database
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Note created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 */
router.post("/create", NoteController.createNote);

 /** 
 * @swagger
 * /update/{id}:
 *   put:
 *     summary: Update a note
 *     description: Modify an existing note
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       404:
 *         description: Note not found
 */
router.put("/update/:id", NoteController.updateNote);

/** 
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: Delete a note
 *     description: Remove a note from the database
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       404:
 *         description: Note not found
 * 
 */
router.delete("/delete/:id", NoteController.deleteNote);

export default router;
