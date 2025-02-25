import Folder from "../models/Folder";

class FolderRepository {
    static async findAll() {
        return await Folder.findAll();
    }

    static async findById(id: number) {
        return await Folder.findByPk(id);
    }

    static async create(data: { name: string; user_id: number; note_ids: number[]}) {
        return await Folder.create(data);
    }

    static async update(id: number, data: { name?: string; user_id?: number; note_ids?: number[]}) {
        const folder = await Folder.findByPk(id);
        if (!folder) return null;
        return await folder.update(data);
    }

    static async delete(id: number) {
        const folder = await Folder.findByPk(id);
        if (!folder) return null;
        await folder.destroy();
        return true;
    }
}

export default FolderRepository;
