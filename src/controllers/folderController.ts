import { Request, Response } from "express";
import FolderService from "../services/folderService";

class FolderController {
    static async getAllFolders(req: Request, res: Response) {
        try {
            const folders = await FolderService.getAllFolders();
            res.json(folders);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getFolderById(req: Request, res: Response) {
        try {
            const folder = await FolderService.getFolderById(Number(req.params.id));
            res.json(folder);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    static async createFolder(req: Request, res: Response) {
        try {
            const folder = await FolderService.createFolder(req.body);
            res.status(201).json(folder);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updateFolder(req: Request, res: Response) {
        try {
            const folder = await FolderService.updateFolder(Number(req.params.id), req.body);
            res.json(folder);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    static async deleteFolder(req: Request, res: Response) {
        try {
            const result = await FolderService.deleteFolder(Number(req.params.id));
            res.json(result);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default FolderController;
