// src/infrastructure/entities/RoleEntity.ts
import { Role } from '../../domain/Role';

export class RoleEntity implements Role {
  id: number;
  nombre: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}
