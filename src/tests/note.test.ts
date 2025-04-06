import NoteService from "../services/noteService";
import NoteRepository from "../repository/noteRepository";

jest.mock("../repository/noteRepository");

describe("NoteService", () => {
  it("deve retornar todas as notas", async () => {
    (NoteRepository.findAll as jest.Mock).mockResolvedValue([{ id: 1, title: "Test Note" }]);

    const notes = await NoteService.getAllNotes();

    expect(notes.length).toBe(1);
    expect(notes[0].title).toBe("Test Note");
  });

  it("deve criar uma nota", async () => {
    (NoteRepository.create as jest.Mock).mockResolvedValue({ id: 1, title: "New Note" });

    const note = await NoteService.createNote({ title: "New Note", content: "Content", folder_id: 1 });

    expect(note.title).toBe("New Note");
  });

  it("deve lançar erro se tentar criar uma nota sem título", async () => {
    await expect(NoteService.createNote({ title: "", content: "Content", folder_id: 1 })).rejects.toThrow(
      "Title and content are required"
    );
  });

  it("deve deletar uma nota", async () => {
    (NoteRepository.delete as jest.Mock).mockResolvedValue(1);

    const response = await NoteService.deleteNote(1);

    expect(response.message).toBe("Note deleted");
  });

  it("deve retornar erro ao tentar deletar uma nota inexistente", async () => {
    (NoteRepository.delete as jest.Mock).mockResolvedValue(0);

    await expect(NoteService.deleteNote(1)).rejects.toThrow("Note not found");
  });
});
