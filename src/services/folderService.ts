import { FolderRepository } from "../repository/folderRepository";

const folderRepo = new FolderRepository();

export class FolderService {
    async getAllFolders() {
        return await folderRepo.findAll();
    }

    async getFolderById(id: number) {
        const note = await folderRepo.findById(id);
        if (!note) throw new Error("Folder not found");
        return note;
    }

    async createFolder(data: { name: string; user_id: number; note_ids: number[]}) {
        if (!data.name || !data.user_id) throw new Error("Folder name and creator ID are required");
        return await folderRepo.create(data);
    }

    async updateFolder(id: number, data: { name: string; user_id: number; note_ids: number[]}) {
        const note = await folderRepo.update(id, data);
        if (!note) throw new Error("Folder not found");
        return note;
    }

    async deleteFolder(id: number) {
        const deleted = await folderRepo.delete(id);
        if (!deleted) throw new Error("Folder not found");
        return { message: "Folder deleted" };
    }
}
