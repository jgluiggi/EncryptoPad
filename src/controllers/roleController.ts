import { Request, Response } from 'express';
import { RoleServices } from '../services/roleService';

const roleService = new RoleServices();

export const createRole = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const role = await roleService.createRole(name);
        res.status(201).json(role);
    } catch (error: any) {
        res.status(500).json({ message: 'Error creating role', error: error.message });
    }
};

export const getAllRoles = async (req: Request, res: Response) => {
    try {
        const roles = await roleService.getAllRoles();
        res.status(200).json(roles);
    } catch (error: any) {
        res.status(500).json({ message: 'Error fetching roles', error: error.message });
    }
};

export const getRoleById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const role = await roleService.getRoleById(id);
        res.json(role);
      } catch (error: any) {
        res.status(500).json({ message: "Erro ao obter a role", error: error.message });
      }
};