import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import { connectDB } from '../infrastructure/config/data-base'; 

const app = express();
app.use(express.json());

import userRoutes from '../infrastructure/routes/UserRoutes';
import comedorRoutes from '../infrastructure/routes/ComedorRoutes';
import roleRoutes from '../infrastructure/routes/RoleRoutes';
import servicioRoutes from '../infrastructure/routes/ServicioRoutes';
import reservaRoutes from '../infrastructure/routes/ReservaRoutes';
import inventarioRoutes from '../infrastructure/routes/InventarioRoutes';
import comedorServicioRoutes from '../infrastructure/routes/ComedorServicioRoutes';
import donaciondineroRoutes from '../infrastructure/routes/DonacionDineroRoutes';
import donacioninventarioRoutes from '../infrastructure/routes/DonacionInventarioRoutes';

connectDB().then(() => {
  app.use('/api', userRoutes);
  app.use('/api', comedorRoutes);
  app.use('/api', roleRoutes);
  app.use('/api/servicios', servicioRoutes);
  app.use('/api', reservaRoutes);
  app.use('/api', inventarioRoutes);
  app.use('/api', comedorServicioRoutes);
  app.use('/api', donaciondineroRoutes);
  app.use('/api', donacioninventarioRoutes);

  app.get('/', (req, res) => {
    res.send('API funcionando con arquitectura hexagonal');
  });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
  });
}).catch((err) => {
  console.error("Error inicializando la BD:", err);
});
