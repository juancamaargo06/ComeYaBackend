import { User } from "../../domain/User";
import { UserEntity } from "../entities/UserEntity";

export class UserAdpartes {
    // Simulación de repositorio en memoria para ejemplo
    private users: UserEntity[] = [];
    private nextId = 1;

    private toDomain(user: UserEntity): User {
        return {
            id: user.id,
            nombre: user.nombre,
            correo: user.correo,
            contraseña: user.contraseña,
            rol_id: user.rol_id,
            creado_at: user.creado_at
        };
    }

    private toEntity(user: Omit<User, "id">): UserEntity {
        return new UserEntity(
            this.nextId++,
            user.nombre,
            user.correo,
            user.contraseña,
            user.rol_id,
            new Date()
        );
    }
    async createUser(user: Omit<User, "id">): Promise<number> {
        const newUser = this.toEntity(user);
        this.users.push(newUser);
        return newUser.id;
    }

    async getUserById(id: number): Promise<User | null> {
        const user = this.users.find(u => u.id === id);
        return user ? this.toDomain(user) : null;
    }

    async getUserByEmail(correo: string): Promise<User | null> {
        const user = this.users.find(u => u.correo === correo);
        return user ? this.toDomain(user) : null;
    }

    async getUserByName(nombre: string): Promise<User | null> {
        const user = this.users.find(u => u.nombre === nombre);
        return user ? this.toDomain(user) : null;
    }

    async getAllUsers(): Promise<User[]> {
        return this.users.map(u => this.toDomain(u));
    }

    async updateUser(id: number, user: Partial<User>): Promise<boolean> {
        const existingUser = this.users.find(u => u.id === id);
        if (!existingUser) return false;
        if (user.nombre) existingUser.nombre = user.nombre;
        if (user.correo) existingUser.correo = user.correo;
        if (user.contraseña) existingUser.contraseña = user.contraseña;
        if (user.rol_id) existingUser.rol_id = user.rol_id;
        return true;
    }

    async deleteUser(id: number): Promise<boolean> {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) return false;
        this.users.splice(index, 1);
        return true;
    }
}