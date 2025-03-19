import { Request, Response } from "express";
import { UserServices } from './../services/userServices';

const userService = new UserServices();

export const register = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const user = await userService.register(email, username, password);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao criar o usuário", error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userService.login(email, password);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: "E-mail ou senha incorretas: ", error: error.message });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao obter os usuários", error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao obter o usuário", error: error.message });
  }
};

export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    const user = await userService.getUserByUsername(username);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao obter o usuário", error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const id = parseInt(req.params.id);
    let user = await userService.updateUserUsername(id, username);
    user = await userService.updateUserPassword(id, password);
    user = await userService.updateUserEmail(id, email);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao atualizar o usuário", error: error.message });
  }
};

export const updateUserPassword = async (req: Request, res: Response) => {
  try {
    const password = req.body.password;
    const id = parseInt(req.params.id);
    const user = await userService.updateUserPassword(id, password);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao atualizar o usuário", error: error.message });
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.deleteUser(id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: "Erro ao deletar o usuário", error: error.message });
  }
};
