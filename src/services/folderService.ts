import FolderRepository from "../repository/folderRepository";

class FolderService {
    static async getAllFolders() {
        return await FolderRepository.findAll();
    }

    static async getFolderById(id: number) {
        const note = await FolderRepository.findById(id);
        if (!note) throw new Error("Folder not found");
        return note;
    }

    static async createFolder(data: { name: string; user_id: number; note_ids: number[]}) {
        if (!data.name || !data.user_id) throw new Error("Folder name and creator ID are required");
        return await FolderRepository.create(data);
    }

    static async updateFolder(id: number, data: { name: string; user_id: number; note_ids: number[]}) {
        const note = await FolderRepository.update(id, data);
        if (!note) throw new Error("Folder not found");
        return note;
    }

    static async deleteFolder(id: number) {
        const deleted = await FolderRepository.delete(id);
        if (!deleted) throw new Error("Folder not found");
        return { message: "Folder deleted" };
    }
}

export default FolderService;
