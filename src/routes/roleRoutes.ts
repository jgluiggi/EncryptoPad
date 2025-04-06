import { Router } from "express";
import { createRole, getAllRoles, getRoleById } from "../controllers/roleController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Endpoints for managing roles
 */

/**
 * @swagger
 * /roles/create:
 *   post:
 *     summary: Create a new role
 *     description: Endpoint to create a new role in the system.
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Default"
 *     responses:
 *       201:
 *         description: Role successfully created
 *       400:
 *         description: Bad request (invalid data)
 *       500:
 *         description: Internal server error
 */
router.post("/create", createRole);

/**
 * @swagger
 * /roles/:
 *   get:
 *     summary: Get all roles
 *     description: Endpoint to retrieve all roles in the system.
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Successfully retrieved roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 *       500:
 *         description: Internal server error
 */
router.get("/", authMiddleware, getAllRoles);

/**
 * @swagger
 * /roles/{id}:
 *   get:
 *     summary: Get a role by ID
 *     description: Endpoint to retrieve a role by its ID.
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the role to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved role
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Role not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", authMiddleware, getRoleById);

export default router;