import { UserRepository } from "../repository/userRepository";
const userRepo = new UserRepository();

export class UserServices {
  async createUser(email: string, username: string, password: string) {
    try {
      const user = await userRepo.createUser(email, username, password);
      return user;
    } catch (error) {
      return error;
    }
  }

  async getAllUsers() {
    try {
      const users = await userRepo.getAllUsers();
      return users;
    } catch (error) {
      return error;
    }
  }

  async getUserById(id: number) {
    try {
      const user = await userRepo.getUserById(id);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }
      return user;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário: ${(error as Error).message}`);
    }
  }

  async getUserByUsername(username: string) {
    try {
      const user = await userRepo.getUserByUsername(username);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }
      return user;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário: ${(error as Error).message}`);
    }
  }

  async updateUser(id: number, email: string, username: string, password: string) {
    try {
      const user = await userRepo.updateUser(id, email, username, password);
      if (user[0] === 0) {
        throw new Error("Usuário não encontrado");
      }
      return user;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${(error as Error).message}`);
    }
  }
}