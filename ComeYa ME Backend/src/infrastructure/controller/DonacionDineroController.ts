// src/infrastructure/controller/DonacionDineroController.ts
import { Request, Response } from 'express';
import { DonacionDineroEntity } from '../entities/DonacionDineroEntity';

// Simulación de base de datos en memoria
const donaciones: DonacionDineroEntity[] = [];
let nextId = 1;

export class DonacionDineroController {
  static getAll(req: Request, res: Response) {
    res.json(donaciones);
  }

  static getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const donacion = donaciones.find(d => d.id === id);
    if (!donacion) return res.status(404).json({ message: 'Donación no encontrada' });
    res.json(donacion);
  }

  static create(req: Request, res: Response) {
    const { usuario_id, monto, descripcion, fecha } = req.body;
    if (!usuario_id || !monto || !fecha) return res.status(400).json({ message: 'Faltan campos requeridos' });
    const donacion = new DonacionDineroEntity(nextId++, usuario_id, monto, descripcion, new Date(fecha));
    donaciones.push(donacion);
    res.status(201).json(donacion);
  }

  static update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { usuario_id, monto, descripcion, fecha } = req.body;
    const donacion = donaciones.find(d => d.id === id);
    if (!donacion) return res.status(404).json({ message: 'Donación no encontrada' });
    if (usuario_id) donacion.usuario_id = usuario_id;
    if (monto) donacion.monto = monto;
    if (descripcion) donacion.descripcion = descripcion;
    if (fecha) donacion.fecha = new Date(fecha);
    res.json(donacion);
  }

  static delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const index = donaciones.findIndex(d => d.id === id);
    if (index === -1) return res.status(404).json({ message: 'Donación no encontrada' });
    donaciones.splice(index, 1);
    res.status(204).send();
  }
}
