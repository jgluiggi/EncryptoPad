import NoteRepository from "../repository/noteRepository";

class NoteService {
    static async getAllNotes() {
        return await NoteRepository.findAll();
    }

    static async getNoteById(id: number) {
        const note = await NoteRepository.findById(id);
        if (!note) throw new Error("Note not found");
        return note;
    }

    static async createNote(data: { title: string; content: string ; folder_id: number}) {
        if (!data.title || !data.content) throw new Error("Title and content are required");
        return await NoteRepository.create(data);
    }

    static async updateNote(id: number, data: { title?: string; content?: string }) {
        const note = await NoteRepository.update(id, data);
        if (!note) throw new Error("Note not found");
        return note;
    }

    static async deleteNote(id: number) {
        const deleted = await NoteRepository.delete(id);
        if (!deleted) throw new Error("Note not found");
        return { message: "Note deleted" };
    }
}

export default NoteService;
