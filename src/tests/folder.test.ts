import FolderService from "../services/folderService";
import FolderRepository from "../repository/folderRepository";

jest.mock("../repository/folderRepository");

describe("FolderService", () => {
  it("deve retornar todas as pastas", async () => {
    (FolderRepository.findAll as jest.Mock).mockResolvedValue([{ id: 1, name: "Test Folder" }]);

    const folders = await FolderService.getAllFolders();

    expect(folders.length).toBe(1);
    expect(folders[0].name).toBe("Test Folder");
  });

  it("deve criar uma nova pasta", async () => {
    (FolderRepository.create as jest.Mock).mockResolvedValue({ id: 1, name: "New Folder" });

    const folder = await FolderService.createFolder({ name: "New Folder", user_id: 1, note_ids: [] });

    expect(folder.name).toBe("New Folder");
  });

  it("deve retornar erro ao criar uma pasta sem nome", async () => {
    await expect(FolderService.createFolder({ name: "", user_id: 1, note_ids: [] })).rejects.toThrow(
      "Folder name and creator ID are required"
    );
  });
});
