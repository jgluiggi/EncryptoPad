import Note from "../models/Note";

class NoteRepository {
    static async findAll() {
        return await Note.findAll();
    }

    static async findById(id: number) {
        return await Note.findByPk(id);
    }

    static async create(data: { title: string; content: string }) {
        return await Note.create(data);
    }

    static async update(id: number, data: { title?: string; content?: string }) {
        const note = await Note.findByPk(id);
        if (!note) return null;
        return await note.update(data);
    }

    static async delete(id: number) {
        const note = await Note.findByPk(id);
        if (!note) return null;
        await note.destroy();
        return true;
    }
}

export default NoteRepository;
