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

    async updateUser(id: number, email: string, username: string, password: string) {
        return await User.update({
            email,
            username,
            password
        }, {
            where: {
                id
            }
        });
    }
}
