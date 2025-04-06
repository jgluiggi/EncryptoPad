import { Request, Response } from "express";
import { OrganizationServices } from "../services/organizationServices";

const organizationService = new OrganizationServices();

export const createOrganization = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const organization = await organizationService.createOrganization(name);
    res.status(201).json(organization);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao criar a organização", error: error.message });
  }
};

export const getAllOrganizations = async (req: Request, res: Response) => {
  try {
    const organizations = await organizationService.getAllOrganizations();
    res.json(organizations);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao obter as organizações", error: error.message });
  }
};

export const getOrganizationById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const organization = await organizationService.getOrganizationById(id);
    res.json(organization);
  } catch (error: any) {
    res.status(404).json({ message: "Organização não encontrada", error: error.message });
  }
};

export const getOrganizationByName = async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const organization = await organizationService.getOrganizationByName(name);
    res.json(organization);
  } catch (error: any) {
    res.status(404).json({ message: "Organização não encontrada", error: error.message });
  }
};

export const updateOrganizationName = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const organization = await organizationService.updateOrganizationName(id, name);
    res.json(organization);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao atualizar a organização", error: error.message });
  }
};

export const deleteOrganization = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await organizationService.deleteOrganization(id);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao deletar a organização", error: error.message });
  }
};

export const addUserToOrganization = async (req: Request, res: Response) => {
  try {
    const { organizationId, userId } = req.body;
    const result = await organizationService.addUserToOrganization(organizationId, userId);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao adicionar usuário à organização", error: error.message });
  }
};

export const removeUserFromOrganization = async (req: Request, res: Response) => {
  try {
    const { organizationId, userId } = req.body;
    const result = await organizationService.removeUserFromOrganization(organizationId, userId);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao remover usuário da organização", error: error.message });
  }
};

export const addFolderToOrganization = async (req: Request, res: Response) => {
  try {
    const { organizationId, folderId } = req.body;
    const result = await organizationService.addFolderToOrganization(organizationId, folderId);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao adicionar pasta à organização", error: error.message });
  }
};

export const removeFolderFromOrganization = async (req: Request, res: Response) => {
  try {
    const { organizationId, folderId } = req.body;
    const result = await organizationService.removeFolderFromOrganization(organizationId, folderId);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao remover pasta da organização", error: error.message });
  }
};

export const addNoteToOrganization = async (req: Request, res: Response) => {
  try {
    const { organizationId, noteId } = req.body;
    const result = await organizationService.addNoteToOrganization(organizationId, noteId);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao adicionar nota à organização", error: error.message });
  }
};

export const removeNoteFromOrganization = async (req: Request, res: Response) => {
  try {
    const { organizationId, noteId } = req.body;
    const result = await organizationService.removeNoteFromOrganization(organizationId, noteId);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao remover nota da organização", error: error.message });
  }
};

export const getUsersByOrganizationId = async (req: Request, res: Response) => {
  try {
    const organizationId = parseInt(req.params.id);
    const users = await organizationService.getUsersByOrganizationId(organizationId);
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao obter usuários da organização", error: error.message });
  }
};

export const getFoldersByOrganizationId = async (req: Request, res: Response) => {
  try {
    const organizationId = parseInt(req.params.id);
    const folders = await organizationService.getFoldersByOrganizationId(organizationId);
    res.json(folders);
  }
  catch (error: any) {
    res.status(500).json({ message: "Erro ao obter pastas da organização", error: error.message });
  }
};

export const getNotesByOrganizationId = async (req: Request, res: Response) => {
  try {
    const organizationId = parseInt(req.params.id);
    const notes = await organizationService.getNotesByOrganizationId(organizationId);
    res.json(notes);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao obter notas da organização", error: error.message });
  }
};

export const getOrganizationUsers = async (req: Request, res: Response) => {
    try {
        const organizationId = parseInt(req.params.id);
        const users = await organizationService.getUsersByOrganizationId(organizationId);
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ message: "Erro ao obter usuários da organização", error: error.message });
    }
}
