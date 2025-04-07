import models from '../models/models';

export class OrganizationRepository {
    async createOrganization(name: string) {
        return await models.Organization.create({
            name,
        });
    }

    async getAllOrganizations() {
        return await models.Organization.findAll();
    }

    async getOrganizationById(id: number) {
        return await models.Organization.findByPk(id);
    }

    async getOrganizationByName(name: string) {
        return await models.Organization.findOne({ where: { name } });
    }

    async updateOrganizationName(id: number, name: string) {
        return await models.Organization.update(
            {
                name,
            },
            {
                where: {
                    id,
                },
            }
        );
    }

    async deleteOrganization(id: number) {
        return await models.Organization.destroy({
            where: {
                id,
            },
        });
    }

    async addUserToOrganization(organizationId: number, userId: number) {
        const organization = await this.getOrganizationById(organizationId);
        if (organization) {
            await organization.addUser(userId);
        }
    }

    async removeUserFromOrganization(organizationId: number, userId: number) {
        const organization = await this.getOrganizationById(organizationId);
        if (organization) {
            await organization.removeUser(userId);
        }
    }

    async addFolderToOrganization(organizationId: number, folderId: number) {
        const organization = await this.getOrganizationById(organizationId);
        if (organization) {
            await organization.addFolder(folderId);
        }
    }

    async removeFolderFromOrganization(organizationId: number, folderId: number) {
        const organization = await this.getOrganizationById(organizationId);
        if (organization) {
            await organization.removeFolder(folderId);
        }
    }

    async addNoteToOrganization(organizationId: number, noteId: number) {
        const organization = await this.getOrganizationById(organizationId);
        if (organization) {
            await organization.addNote(noteId);
        }
    }

    async removeNoteFromOrganization(organizationId: number, noteId: number) {
        const organization = await this.getOrganizationById(organizationId);
        if (organization) {
            await organization.removeNote(noteId);
        }
    }

    async getUsersInOrganization(organizationId: number) {
        const organization = await this.getOrganizationById(organizationId);
        if (organization) {
            return await organization.getUsers();
        }
        return null;
    }

    async getFoldersInOrganization(organizationId: number) {
        const organization = await this.getOrganizationById(organizationId);
        if (organization) {
            return await organization.getFolders();
        }
        return null;
    }

    async getNotesInOrganization(organizationId: number) {
        const organization = await this.getOrganizationById(organizationId);
        if (organization) {
            return await organization.getNotes();
        }
        return null;
    }
}