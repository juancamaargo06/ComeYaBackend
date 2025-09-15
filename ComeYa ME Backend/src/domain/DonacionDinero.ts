// src/domain/DonacionDinero.ts
export interface DonacionDinero {
  id: number;
  usuario_id: number;
  monto: number;
  descripcion?: string;
  fecha: Date;
}
