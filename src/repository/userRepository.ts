import { updateUser } from './../controllers/userController';
import { User } from "../models/User";

export class UserRepository {
    async createUser (email: string, username: string, password: string) {
        return await User.create({
            email,
            username,
            password
            });
    }

    async getAllUsers() {
        return await User.findAll();
    }

    async getUserById(id: number) {
        return await User.findByPk(id);
    }

    async getUserByUsername(username: string) {
        return await User.findOne({ where: { username } });
    }

    async getUserByEmail(email: string) {
        return await User.findOne({ where: { email } });
    }

    async updateUserUsername(id: number, username: string) {
        return await User.update({
            username
        }, {
            where: {
                id
            }
        });
    }

    async updateUserPassword(id: number, password: string) {
        return await User.update({
            password
        }, {
            where: {
                id
            }
        });
    }

    async updateUserEmail(id: number, email: string) {
        return await User.update({
            email
        }, {
            where: {
                id
            }
        });
    }

    async deleteUser(id: number) {
        return await User.destroy({
            where: {
                id
            }
        });
    }
}
