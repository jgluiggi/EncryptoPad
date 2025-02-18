import { Request, Response } from "express";
import NoteService from "../services/noteService";

class NoteController {
    static async getAllNotes(req: Request, res: Response) {
        try {
            const notes = await NoteService.getAllNotes();
            res.json(notes);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getNoteById(req: Request, res: Response) {
        try {
            const note = await NoteService.getNoteById(Number(req.params.id));
            res.json(note);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    static async createNote(req: Request, res: Response) {
        try {
            const note = await NoteService.createNote(req.body);
            res.status(201).json(note);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updateNote(req: Request, res: Response) {
        try {
            const note = await NoteService.updateNote(Number(req.params.id), req.body);
            res.json(note);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    static async deleteNote(req: Request, res: Response) {
        try {
            const result = await NoteService.deleteNote(Number(req.params.id));
            res.json(result);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default NoteController;
