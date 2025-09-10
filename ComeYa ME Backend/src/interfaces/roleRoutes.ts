// src/interfaces/roleRoutes.ts
import { Router } from 'express';
import roleRoutes from '../infrastructure/routes/RoleRoutes';

const router = Router();

router.use('/roles', roleRoutes);

export default router;
