import models from "../models/models";

class NoteRepository {
    static async findAll() {
        return await models.Note.findAll();
    }

    static async findById(id: number) {
        return await models.Note.findByPk(id);
    }

    static async create(data: { title: string; content: string; folder_id: number; organization_id: number }) {
        return await models.Note.create(data);
    }

    static async update(id: number, data: { title?: string; content?: string }) {
        const note = await models.Note.findByPk(id);
        if (!note) return null;
        return await note.update(data);
    }

    static async delete(id: number) {
        const note = await models.Note.findByPk(id);
        if (!note) return null;
        await note.destroy();
        return true;
    }
}

export default NoteRepository;
