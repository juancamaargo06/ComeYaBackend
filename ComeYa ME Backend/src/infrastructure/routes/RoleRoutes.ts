// src/infrastructure/routes/RoleRoutes.ts
import { Router } from 'express';
import { RoleController } from '../controller/RoleController';

const router = Router();

router.get('/', RoleController.getAll);
router.get('/:id', RoleController.getById);
router.post('/', RoleController.create);
router.put('/:id', RoleController.update);
router.delete('/:id', RoleController.delete);

export default router;
