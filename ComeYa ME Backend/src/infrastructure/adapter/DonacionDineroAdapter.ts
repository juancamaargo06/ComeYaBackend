// src/infrastructure/adapter/DonacionDineroAdapter.ts
import { DonacionDinero } from '../../domain/DonacionDinero';
import { DonacionDineroEntity } from '../entities/DonacionDineroEntity';

export class DonacionDineroAdapter {
  static toEntity(donacion: DonacionDinero): DonacionDineroEntity {
    return new DonacionDineroEntity(
      donacion.id,
      donacion.usuario_id,
      donacion.monto,
      donacion.descripcion,
      donacion.fecha
    );
  }

  static toDomain(entity: DonacionDineroEntity): DonacionDinero {
    return {
      id: entity.id,
      usuario_id: entity.usuario_id,
      monto: entity.monto,
      descripcion: entity.descripcion,
      fecha: entity.fecha,
    };
  }
}
