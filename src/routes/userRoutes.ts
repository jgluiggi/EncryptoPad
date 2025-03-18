import { Router } from "express";
import { 
    getAllUsers,
    login,
    register,
    getUserById,
    getUserByUsername,
    updateUser,
    deleteUser,
    updateUserPassword
 } from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware"

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         email:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints for managing users
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint to create a new user in the system.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - username
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@email.com"
 *               username:
 *                 type: string
 *                 example: "username"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: User successfully created
 *       400:
 *         description: Bad request (invalid data)
 *       500:
 *         description: Internal server error
 */
router.post("/register", register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Logs the user in
 *     description: Endpoint to login a user in the system.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@email.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: User logged in
 *       500:
 *         description: Internal server error
 */
router.post("/login", login);

/**
 * @swagger
 * /users/:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of all registered users in the system.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users successfully retrieved
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieves user data based on the provided ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User successfully retrieved
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getUserById);

/**
 * @swagger
 * /users/username/{username}:
 *   get:
 *     summary: Get a user by username
 *     description: Retrieves user data based on the provided username.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *         description: Username
 *     responses:
 *       200:
 *         description: User successfully retrieved
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/username/:username", getUserByUsername);

/**
 * @swagger
 * /users/update/{id}:
 *   put:
 *     summary: Update a user
 *     description: Updates the data of a specific user based on the provided ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID to be updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "jane@email.com"
 *               username:
 *                 type: string
 *                 example: "jane"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "newpassword123"
 *     responses:
 *       200:
 *         description: User successfully updated
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.put("/update/:id", authMiddleware, updateUser);

/**
 * @swagger
 * /users/update/password/{id}:
 *   put:
 *     summary: Update user password
 *     description: Allows a user to update their password.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "newPassword456"
 *     responses:
 *       200:
 *         description: Password successfully updated
 *       400:
 *         description: Invalid current password
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.put("/update/password/:id", authMiddleware, updateUserPassword);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Removes a user from the system based on the provided ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID to be deleted
 *     responses:
 *       200:
 *         description: User successfully deleted
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", authMiddleware, deleteUser);

export default router;
