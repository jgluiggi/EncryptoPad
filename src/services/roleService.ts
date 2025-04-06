import { RoleRepository } from "../repository/roleRepository";

export class RoleServices {
    private roleRepo: RoleRepository;
    
    constructor(roleRepo?: RoleRepository) {
        this.roleRepo = roleRepo || new RoleRepository();
    }

    async createRole(name: string) {
        try {
            const role = await this.roleRepo.createRole(name);
            return role;
        } catch (error) {
            throw error;
        }
    }
    
    async getAllRoles() {
        try {
        const roles = await this.roleRepo.getAllRoles();
        return roles;
        } catch (error) {
        throw error;
        }
    }
    
    async getRoleById(id: number) {
        try {
        const role = await this.roleRepo.getRoleById(id);
        if (!role) {
            throw new Error('Cargo não encontrado.');
        }
        return role;
        } catch (error) {
        throw error;
        }
    }
}