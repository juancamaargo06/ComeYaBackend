import express from 'express';

const app = express();
app.use(express.json());



import userRoutes from '../interfaces/userRoutes';
import comedorRoutes from '../interfaces/comedorRoutes';

app.use('/api', userRoutes);
app.use('/api', comedorRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando con arquitectura hexagonal');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
