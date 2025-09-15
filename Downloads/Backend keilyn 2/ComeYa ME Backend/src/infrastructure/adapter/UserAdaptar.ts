import { AppDataSource } from '../config/data-base';
import { User } from "../../domain/User";
import { UserEntity } from "../entities/UserEntity";

export class UserAdpartes {
    private toDomain(user: UserEntity): User {
        return {
            id: user.id,
            nombre: user.nombre,
            correo: user.correo,
            contraseña: user.contraseña,
            rol_id: user.rol_id
        };
    }

    async createUser(user: Omit<User, "id">): Promise<number> {
        const repo = AppDataSource.getRepository(UserEntity);
        const newUser = repo.create(user);
        await repo.save(newUser);
        return newUser.id;
    }

    async getUserById(id: number): Promise<User | null> {
        const repo = AppDataSource.getRepository(UserEntity);
        const user = await repo.findOneBy({ id });
        return user ? this.toDomain(user) : null;
    }

    async getUserByEmail(correo: string): Promise<User | null> {
        const repo = AppDataSource.getRepository(UserEntity);
        const user = await repo.findOneBy({ correo });
        return user ? this.toDomain(user) : null;
    }

    async getUserByName(nombre: string): Promise<User | null> {
        const repo = AppDataSource.getRepository(UserEntity);
        const user = await repo.findOneBy({ nombre });
        return user ? this.toDomain(user) : null;
    }

    async getAllUsers(): Promise<User[]> {
        const repo = AppDataSource.getRepository(UserEntity);
        const users = await repo.find();
        return users.map(u => this.toDomain(u));
    }

    async updateUser(id: number, user: Partial<User>): Promise<boolean> {
        const repo = AppDataSource.getRepository(UserEntity);
        const result = await repo.update(id, user);
        return result.affected !== undefined && result.affected > 0;
    }

    async deleteUser(id: number): Promise<boolean> {
        const repo = AppDataSource.getRepository(UserEntity);
        const result = await repo.delete(id);
        return !!result.affected && result.affected > 0;
    }
}