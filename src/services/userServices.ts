import { updateUser } from './../controllers/userController';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserRepository } from "../repository/userRepository";
const userRepo = new UserRepository();

export class UserServices {
  async register(email: string, username: string, password: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await userRepo.createUser(email, username, hashedPassword);
      return user;
    } catch (error) {
      return error;
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await userRepo.getUserByEmail(email);
      if (!user) throw new Error('Email ou senha inválida.');

      const validPassword = await bcrypt.compare(password, user.password)
      if (!validPassword) throw new Error('Email ou senha inválida.');

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h'});
      return token;
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

  async updateUserUsername(id: number, username: string) {
    try {
      const user = await userRepo.updateUserUsername(id, username);
      if (user[0] === 0) {
        throw new Error("Usuário não encontrado");
      }
      return user;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${(error as Error).message}`);
    }
  }

  async updateUserPassword(id: number, password: string) {
    try {
      const user = await userRepo.updateUserPassword(id, password);
      if (user[0] === 0) {
        throw new Error("Usuário não encontrado");
      }
      return user;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${(error as Error).message}`);
    }
  }

  async updateUserEmail(id: number, email: string) {
    try {
      const user = await userRepo.updateUserEmail(id, email);
      if (user[0] === 0) {
        throw new Error("Usuário não encontrado");
      }
      return user;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${(error as Error).message}`);
    }
  }

  async deleteUser(id: number) {
    try {
      const user = await userRepo.deleteUser(id);
      if (user === 0) {
        throw new Error("Usuário não encontrado");
      }
      return user;
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${(error as Error).message}`);
    }
  }
}
