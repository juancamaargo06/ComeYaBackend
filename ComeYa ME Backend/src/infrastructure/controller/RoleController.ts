// src/infrastructure/controller/RoleController.ts
import { Request, Response } from 'express';
import { RoleEntity } from '../entities/RoleEntity';

// Simulación de base de datos en memoria
const roles: RoleEntity[] = [];
let nextId = 1;

export class RoleController {
  static getAll(req: Request, res: Response) {
    res.json(roles);
  }

  static getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const role = roles.find(r => r.id === id);
    if (!role) return res.status(404).json({ message: 'Rol no encontrado' });
    res.json(role);
  }

  static create(req: Request, res: Response) {
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ message: 'Nombre es requerido' });
    const role = new RoleEntity(nextId++, nombre);
    roles.push(role);
    res.status(201).json(role);
  }

  static update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { nombre } = req.body;
    const role = roles.find(r => r.id === id);
    if (!role) return res.status(404).json({ message: 'Rol no encontrado' });
    if (nombre) role.nombre = nombre;
    res.json(role);
  }

  static delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const index = roles.findIndex(r => r.id === id);
    if (index === -1) return res.status(404).json({ message: 'Rol no encontrado' });
    roles.splice(index, 1);
    res.status(204).send();
  }
}
