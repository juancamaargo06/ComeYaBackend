// src/infrastructure/routes/ServicioRoutes.ts
import { Router } from 'express';
import { ServicioController } from '../controller/ServicioController';
import { ServicioAdpartes } from '../adapter/ServicioAdapter';


const router = Router();
const servicioController = new ServicioController(new ServicioAdpartes());

router.get('/', (req, res) => servicioController.getAllServicios(req, res));
router.get('/:id', (req, res) => servicioController.getServicioById(req, res));
router.post('/', (req, res) => servicioController.createServicio(req, res));
router.put('/:id', (req, res) => servicioController.updateServicio(req, res));
router.delete('/:id', (req, res) => servicioController.deleteServicio(req, res));

export default router ;