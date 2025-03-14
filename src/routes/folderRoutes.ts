import { Router } from "express";
import folderController from "../controllers/folderController";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     folder:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 *         user_id:
 *           type: number
 */

/**
 * @swagger
 * tags:
 *   name: folders
 *   description: Endpoints for folder management
 */

/** 
 * @swagger
 * /folders/getAll:
 *   get:
 *     summary: Retrieve all folders
 *     description: Get a list of all folders
 *     tags: [folders]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/folder'
 */ 
router.get("/getAll", folderController.getAllFolders);

/** 
 * @swagger
 * /folders/getById/{id}:
 *   get:
 *     summary: Get a folder by ID
 *     description: Retrieve a specific folder using its ID
 *     tags: [folders]
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
 *               $ref: '#/components/schemas/folder'
 *       404:
 *         description: folder not found
 */ 
router.get("/getById/:id", folderController.getFolderById);

/** 
 * @swagger
 * /folders/create:
 *   post:
 *     summary: Create a new folder
 *     description: Add a new folder to the database
 *     tags: [folders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               user_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: folder created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/folder'
 */
router.post("/create", folderController.createFolder);

 /** 
 * @swagger
 * /folders/update/{id}:
 *   put:
 *     summary: Update a folder
 *     description: Modify an existing folder
 *     tags: [folders]
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
 *               name:
 *                 type: string
 *               user_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: folder updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/folder'
 *       404:
 *         description: folder not found
 */
router.put("/update/:id", folderController.updateFolder);

/** 
 * @swagger
 * /folders/delete/{id}:
 *   delete:
 *     summary: Delete a folder
 *     description: Remove a folder from the database
 *     tags: [folders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: folder deleted successfully
 *       404:
 *         description: folder not found
 * 
 */
router.delete("/delete/:id", folderController.deleteFolder);

export default router;
