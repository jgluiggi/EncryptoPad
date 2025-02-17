import { Router } from "express";
import NoteController from "../controllers/noteController";

const router = Router();

router.get("/getAll", NoteController.getAllNotes);
router.get("/getById/:id", NoteController.getNoteById);
router.post("/create", NoteController.createNote);
router.put("/update/:id", NoteController.updateNote);
router.delete("/delete/:id", NoteController.deleteNote);

export default router;
