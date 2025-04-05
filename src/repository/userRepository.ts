import models from '../models';

export class UserRepository {
    async createUser (email: string, username: string, password: string) {
        return await models.User.create({
            email,
            username,
            password
            });
    }

    async getAllUsers() {
        return await models.User.findAll();
    }

    async getUserById(id: number) {
        return await models.User.findByPk(id);
    }

    async getUserByUsername(username: string) {
        return await models.User.findOne({ where: { username } });
    }

    async getUserByEmail(email: string) {
        return await models.User.findOne({ where: { email } });
    }

    async updateUserUsername(id: number, username: string) {
        return await models.User.update({
            username
        }, {
            where: {
                id
            }
        });
    }

    async updateUserPassword(id: number, password: string) {
        return await models.User.update({
            password
        }, {
            where: {
                id
            }
        });
    }

    async updateUserEmail(id: number, email: string) {
        return await models.User.update({
            email
        }, {
            where: {
                id
            }
        });
    }

    async deleteUser(id: number) {
        return await models.User.destroy({
            where: {
                id
            }
        });
    }
}
