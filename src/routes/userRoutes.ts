import { Router } from "express";
import { 
    getAllUsers,
    createUser,
    getUserById,
    getUserByUsername
 } from "../controllers/userController";

const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.get("/:username", getUserByUsername);

export default router;
