import { User } from "../../domain/User";

export class UserEntity implements User {
    id: number;
    nombre: string;
    correo: string;
    contraseña: string;
    rol_id: number;
    creado_at?: Date;

    constructor(id: number, nombre: string, correo: string, contraseña: string, rol_id: number, creado_at?: Date) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
        this.rol_id = rol_id;
        this.creado_at = creado_at;
    }
}