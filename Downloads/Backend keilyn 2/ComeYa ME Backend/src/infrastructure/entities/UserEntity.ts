import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from "../../domain/User";

@Entity('usuarios')
export class UserEntity implements User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar' })
    nombre!: string;

    @Column({ type: 'varchar' })
    correo!: string;

    @Column({ type: 'varchar' })
    contraseña!: string;

    @Column({ type: 'int' })
    rol_id!: number;

}