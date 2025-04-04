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
 * tags:
 *   name: Organizations
 *   description: Endpoints para gerenciamento de organizações
 */

/**
 * @swagger
 * /organizations/create:
 *   post:
 *     summary: Cria uma nova organização
 *     tags: [Organizations]
 *     security:
 *       - bearerAuth: []
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
 * /organizations:
 *   get:
 *     summary: Retorna todas as organizações
 *     tags: [Organizations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de organizações
 */
router.get("/", authMiddleware, getAllOrganizations);

/**
 * @swagger
 * /organizations/{id}:
 *   get:
 *     summary: Retorna uma organização pelo ID
 *     tags: [Organizations]
 *     security:
 *       - bearerAuth: []
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
router.get("/:id", authMiddleware, getOrganizationById);

/**
 * @swagger
 * /organizations/name/{name}:
 *   get:
 *     summary: Retorna uma organização pelo nome
 *     tags: [Organizations]
 *     security:
 *       - bearerAuth: []
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
router.get("/name/:name", authMiddleware, getOrganizationByName);

/**
 * @swagger
 * /organizations/{id}:
 *   put:
 *     summary: Atualiza o nome de uma organização
 *     tags: [Organizations]
 *     security:
 *       - bearerAuth: []
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
router.put("/:id", authMiddleware, updateOrganizationName);

/**
 * @swagger
 * /organizations/{id}:
 *   delete:
 *     summary: Deleta uma organização
 *     tags: [Organizations]
 *     security:
 *       - bearerAuth: []
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
router.delete("/:id", authMiddleware, deleteOrganization);

/**
 * @swagger
 * /organizations/add-user:
 *   post:
 *     summary: Adiciona um usuário a uma organização
 *     tags: [Organizations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: string
 *               userId:
 *                 type: string
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
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: string
 *               userId:
 *                 type: string
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
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: string
 *               folderId:
 *                 type: string
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
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: string
 *               folderId:
 *                 type: string
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
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: string
 *               noteId:
 *                 type: string
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
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationId:
 *                 type: string
 *               noteId:
 *                 type: string
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
 *       - bearerAuth: []
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
 *       - bearerAuth: []
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
 *       - bearerAuth: []
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
