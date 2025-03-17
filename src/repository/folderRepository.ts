import { Folder } from "../models/Folder";

export class FolderRepository {
    async findAll() {
        return await Folder.findAll();
    }

    async findById(id: number) {
        return await Folder.findByPk(id);
    }

    async create(data: { name: string; user_id: number; note_ids: number[]}) {
        return await Folder.create(data);
    }

    async update(id: number, data: { name?: string; user_id?: number; note_ids?: number[]}) {
        const folder = await Folder.findByPk(id);
        if (!folder) return null;
        return await folder.update(data);
    }

    async delete(id: number) {
        const folder = await Folder.findByPk(id);
        if (!folder) return null;
        await folder.destroy();
        return true;
    }
}