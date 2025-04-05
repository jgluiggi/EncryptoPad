import { OrganizationRepository } from '../repository/organizationRepository';

export class OrganizationServices {
    private organizationRepo: OrganizationRepository;

    constructor(organizationRepo?: OrganizationRepository) {
        this.organizationRepo = organizationRepo || new OrganizationRepository();
    }

    async createOrganization(name: string) {
        try {
            const organization = await this.organizationRepo.createOrganization(name);
            return organization;
        } catch (error) {
            throw error;
        }
    }

    async getAllOrganizations() {
        try {
            const organizations = await this.organizationRepo.getAllOrganizations();
            return organizations;
        } catch (error) {
            throw error;
        }
    }

    async getOrganizationById(id: number) {
        try {
            const organization = await this.organizationRepo.getOrganizationById(id);
            if (!organization) {
                throw new Error('Organização não encontrada.');
            }
            return organization;
        } catch (error) {
            throw error;
        }
    }

    async getOrganizationByName(name: string) {
        try {
            const organization = await this.organizationRepo.getOrganizationByName(name);
            if (!organization) {
                throw new Error('Organização não encontrada.');
            }
            return organization;
        } catch (error) {
            throw error;
        }
    }

    async getOrganizationIdByName(name: string) {
        try {
            const organization = await this.organizationRepo.getOrganizationByName(name);
            if (!organization) {
                throw new Error('Organização não encontrada.');
            }
            return organization.id;
        } catch (error) {
            throw error;
        }
    }

    async updateOrganizationName(id: number, name: string) {
        try {
            const organization = await this.organizationRepo.updateOrganizationName(id, name);
            if (organization[0] === 0) {
                throw new Error('Organização não encontrada.');
            }
            return organization;
        } catch (error) {
            throw error;
        }
    }

    async deleteOrganization(id: number) {
        try {
            await this.organizationRepo.deleteOrganization(id);
            return { message: 'Organização deletada com sucesso.' };
        } catch (error) {
            throw error;
        }
    }

    async addUserToOrganization(organizationId: number, userId: number) {   
        try {
            await this.organizationRepo.addUserToOrganization(organizationId, userId);
            return { message: 'Usuário adicionado à organização com sucesso.' };
        } catch (error) {
            throw error;
        }
    }

    async removeUserFromOrganization(organizationId: number, userId: number) {
        try {
            await this.organizationRepo.removeUserFromOrganization(organizationId, userId);
            return { message: 'Usuário removido da organização com sucesso.' };
        } catch (error) {
            throw error;
        }
    }

    async addFolderToOrganization(organizationId: number, folderId: number) {
        try {
            await this.organizationRepo.addFolderToOrganization(organizationId, folderId);
            return { message: 'Pasta adicionada à organização com sucesso.' };
        } catch (error) {
            throw error;
        }
    }

    async removeFolderFromOrganization(organizationId: number, folderId: number) {
        try {
            await this.organizationRepo.removeFolderFromOrganization(organizationId, folderId);
            return { message: 'Pasta removida da organização com sucesso.' };
        } catch (error) {
            throw error;
        }
    }

    async addNoteToOrganization(organizationId: number, noteId: number) {
        try {
            await this.organizationRepo.addNoteToOrganization(organizationId, noteId);
            return { message: 'Nota adicionada à organização com sucesso.' };
        } catch (error) {
            throw error;
        }
    }

    async removeNoteFromOrganization(organizationId: number, noteId: number) {
        try {
            await this.organizationRepo.removeNoteFromOrganization(organizationId, noteId);
            return { message: 'Nota removida da organização com sucesso.' };
        } catch (error) {
            throw error;
        }
    }

    async getUsersByOrganizationId(organizationId: number) {
        try {
            const users = await this.organizationRepo.getUsersInOrganization(organizationId);
            return users;
        } catch (error) {
            throw error;
        }
    }

    async getFoldersByOrganizationId(organizationId: number) {
        try {
            const folders = await this.organizationRepo.getFoldersInOrganization(organizationId);
            return folders;
        } catch (error) {
            throw error;
        }
    }

    async getNotesByOrganizationId(organizationId: number) {
        try {
            const notes = await this.organizationRepo.getNotesInOrganization(organizationId);
            return notes;
        } catch (error) {
            throw error;
        }
    }
}