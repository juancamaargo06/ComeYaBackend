// src/infrastructure/adapter/RoleAdapter.ts
import { Role } from '../../domain/Role';
import { RoleEntity } from '../entities/RoleEntity';

export class RoleAdapter {
  static toEntity(role: Role): RoleEntity {
    return new RoleEntity(role.id, role.nombre);
  }

  static toDomain(roleEntity: RoleEntity): Role {
    return {
      id: roleEntity.id,
      nombre: roleEntity.nombre,
    };
  }
}
