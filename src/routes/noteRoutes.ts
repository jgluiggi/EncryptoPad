import { Router } from "express";
import NoteController from "../controllers/noteController";

const router = Router();

router.get("/", NoteController.getAllNotes);
router.get("/:id", NoteController.getNoteById);
router.post("/", NoteController.createNote);
router.put("/:id", NoteController.updateNote);
router.delete("/:id", NoteController.deleteNote);

export default router;
