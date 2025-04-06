import models from "../models/index";

export class RoleRepository {
    async createRole(name: string) {
        return await models.Role.create({
            name,
        });
    }

    async getAllRoles() {
        return await models.Role.findAll();
    }

    async getRoleById(id: number) {
        return await models.Role.findByPk(id);
    }

    async getRoleByName(name: string) {
        return await models.Role.findOne({ where: { name } });
    }

    async updateRole(id: number, name: string) {
        return await models.Role.update(
            { name },
            { where: { id } }
        );
    }

    async deleteRole(id: number) {
        return await models.Role.destroy({
            where: {
                id,
            },
        });
    }
}