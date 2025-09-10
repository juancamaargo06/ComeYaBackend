// src/domain/Usuario.ts
export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  contraseña: string;
  rol_id: number;
  creado_at?: Date;
}
