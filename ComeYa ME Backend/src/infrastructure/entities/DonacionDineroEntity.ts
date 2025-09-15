// src/infrastructure/entities/DonacionDineroEntity.ts
import { DonacionDinero } from '../../domain/DonacionDinero';

export class DonacionDineroEntity implements DonacionDinero {
  id: number;
  usuario_id: number;
  monto: number;
  descripcion?: string;
  fecha: Date;

  constructor(id: number, usuario_id: number, monto: number, descripcion: string | undefined, fecha: Date) {
    this.id = id;
    this.usuario_id = usuario_id;
    this.monto = monto;
    this.descripcion = descripcion;
    this.fecha = fecha;
  }
}
