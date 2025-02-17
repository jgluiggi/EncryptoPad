import { Router } from "express";
import { 
    getAllUsers,
    createUser,
    getUserById,
    getUserByUsername,
    updateUser
 } from "../controllers/userController";

const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.get("/:username", getUserByUsername);
router.put("/:id", updateUser);

export default router;
