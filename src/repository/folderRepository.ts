import models from '../models/models';
import { Folder } from '../models/Folder';
import { FindOptions } from 'sequelize';

class FolderRepository {
    static async findAll(options: FindOptions = {}): Promise<Folder[]> {
        return await models.Folder.findAll(options);
    }

    static async findById(id: number) {
        return await models.Folder.findByPk(id);
    }

    static async create(data: { name: string; user_id: number; note_ids: number[]}) {
        return await models.Folder.create(data);
    }

    static async update(id: number, data: { name?: string; user_id?: number; note_ids?: number[]}) {
        const folder = await models.Folder.findByPk(id);
        if (!folder) return null;
        return await folder.update(data);
    }

    static async delete(id: number) {
        const folder = await models.Folder.findByPk(id);
        if (!folder) return null;
        await folder.destroy();
        return true;
    }
}

export default FolderRepository;
