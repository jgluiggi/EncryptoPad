import { Router } from "express";
import { 
    getAllUsers,
    createUser,
    getUserById,
    getUserByUsername,
    updateUser,
    deleteUser,
    updateUserPassword
 } from "../controllers/userController";

const router = Router();

// Rota para criar um novo usuário
router.post("/create", createUser);

// Rota para obter todos os usuários
router.get("/", getAllUsers);

// Rota para obter um usuário pelo ID
router.get("/:id", getUserById);

// Rota para obter um usuário pelo username
router.get("/username/:username", getUserByUsername);

// Rota para atualizar um usuário
router.put("/update/:id", updateUser);

// Rota para atualizar a senha de um usuário
router.put("/update/password/:id", updateUserPassword);

// Rota para deletar um usuário
router.delete("/:id", deleteUser);

export default router;
