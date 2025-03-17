import { Request, Response } from "express";
import { FolderService } from "../services/folderService";

const folderService = new FolderService();

export const getAllFolders = async (req: Request, res: Response) => {
    try {
        const folders = await folderService.getAllFolders();
        res.json(folders);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
export const getFolderById = async (req: Request, res: Response) => {
    try {
        const folder = await folderService.getFolderById(Number(req.params.id));
        res.json(folder);
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
}
export const createFolder = async (req: Request, res: Response) => {
    try {
        const folder = await folderService.createFolder(req.body);
        res.status(201).json(folder);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}
export const updateFolder = async (req: Request, res: Response) => {
    try {
        const folder = await folderService.updateFolder(Number(req.params.id), req.body);
        res.json(folder);
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
}
export const deleteFolder = async (req: Request, res: Response) => {
    try {
        const result = await folderService.deleteFolder(Number(req.params.id));
        res.json(result);
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
}
