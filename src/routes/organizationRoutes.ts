import { Router } from "express";
import {
  createOrganization,
  getAllOrganizations,
  getOrganizationById,
  getOrganizationByName,
  updateOrganizationName,
  deleteOrganization,
  addUserToOrganization,
  removeUserFromOrganization,
  addFolderToOrganization,
  removeFolderFromOrganization,
  addNoteToOrganization,
  removeNoteFromOrganization,
  getUsersByOrganizationId,
  getFoldersByOrganizationId,
  getNotesByOrganizationId,
} from "../controllers/organizationController";

import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Organization:
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
 *   name: Organizations
 *   description: Endpoints for managing organizations
 */

/**
 * @swagger
 * /organizations/create:
 *   post:
 *     summary: Cria uma nova organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Organização criada com sucesso
 */
router.post("/create", authMiddleware, createOrganization);

/**
 * @swagger
 * /organizations/getAll:
 *   get:
 *     summary: Retorna todas as organizações
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de organizações
 */
router.get("/getAll", authMiddleware, getAllOrganizations);

/**
 * @swagger
 * /organizations/getById/{id}:
 *   get:
 *     summary: Retorna uma organização pelo ID
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Organização encontrada
 */
router.get("/getById/:id", authMiddleware, getOrganizationById);

/**
 * @swagger
 * /organizations/getByName/{name}:
 *   get:
 *     summary: Retorna uma organização pelo nome
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Organização encontrada
 */
router.get("/getByName/:name", authMiddleware, getOrganizationByName);

/**
 * @swagger
 * /organizations/updateName/{id}:
 *   put:
 *     summary: Atualiza o nome de uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
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
 *     responses:
 *       200:
 *         description: Nome atualizado com sucesso
 */
router.put("/updateName/:id", authMiddleware, updateOrganizationName);

/**
 * @swagger
 * /organizations/delete/{id}:
 *   delete:
 *     summary: Deleta uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Organização deletada com sucesso
 */
router.delete("/delete/:id", authMiddleware, deleteOrganization);

/**
 * @swagger
 * /organizations/add-user/:
 *   post:
 *     summary: Adiciona um usuário a uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: number
 *               userId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Usuário adicionado com sucesso
 */
router.post("/add-user", authMiddleware, addUserToOrganization);

/**
 * @swagger
 * /organizations/remove-user:
 *   post:
 *     summary: Remove um usuário de uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: number
 *               userId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso
 */
router.post("/remove-user", authMiddleware, removeUserFromOrganization);

/**
 * @swagger
 * /organizations/add-folder:
 *   post:
 *     summary: Adiciona uma pasta a uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: number
 *               folderId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Pasta adicionada com sucesso
 */
router.post("/add-folder", authMiddleware, addFolderToOrganization);

/**
 * @swagger
 * /organizations/remove-folder:
 *   post:
 *     summary: Remove uma pasta de uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: number
 *               folderId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Pasta removida com sucesso
 */
router.post("/remove-folder", authMiddleware, removeFolderFromOrganization);

/**
 * @swagger
 * /organizations/add-note:
 *   post:
 *     summary: Adiciona uma nota a uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: number
 *               noteId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Nota adicionada com sucesso
 */
router.post("/add-note", authMiddleware, addNoteToOrganization);

/**
 * @swagger
 * /organizations/remove-note:
 *   post:
 *     summary: Remove uma nota de uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: number
 *               noteId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Nota removida com sucesso
 */
router.post("/remove-note", authMiddleware, removeNoteFromOrganization);

/**
 * @swagger
 * /organizations/{id}/users:
 *   get:
 *     summary: Lista os usuários de uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 */
router.get("/:id/users", authMiddleware, getUsersByOrganizationId);

/**
 * @swagger
 * /organizations/{id}/folders:
 *   get:
 *     summary: Lista as pastas de uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de pastas retornada com sucesso
 */
router.get("/:id/folders", authMiddleware, getFoldersByOrganizationId);

/**
 * @swagger
 * /organizations/{id}/notes:
 *   get:
 *     summary: Lista as notas de uma organização
 *     tags: [Organizations]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de notas retornada com sucesso
 */
router.get("/:id/notes", authMiddleware, getNotesByOrganizationId);

export default router;
