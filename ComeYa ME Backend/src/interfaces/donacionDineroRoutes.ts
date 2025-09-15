// src/interfaces/donacionDineroRoutes.ts
import { Router } from 'express';
import donacionDineroRoutes from '../infrastructure/routes/DonacionDineroRoutes';

const router = Router();

router.use('/donacionesdinero', donacionDineroRoutes);

export default router;
