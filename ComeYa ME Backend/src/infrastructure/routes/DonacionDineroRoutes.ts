// src/infrastructure/routes/DonacionDineroRoutes.ts
import { Router } from 'express';
import { DonacionDineroController } from '../controller/DonacionDineroController';

const router = Router();

router.get('/', DonacionDineroController.getAll);
router.get('/:id', DonacionDineroController.getById);
router.post('/', DonacionDineroController.create);
router.put('/:id', DonacionDineroController.update);
router.delete('/:id', DonacionDineroController.delete);

export default router;
