import { Router } from 'express';

const router = Router();

// Simulación de almacenamiento en memoria
const comedores: any[] = [];

router.post('/comedores', (req, res) => {
  const { nombre, direccion, horarios, latitud, longitud, creado_por } = req.body;
  // Aquí deberías validar y guardar en la base de datos real
  const nuevoComedor = {
    id: comedores.length + 1,
    nombre,
    direccion,
    horarios,
    latitud,
    longitud,
    creado_por,
  };
  comedores.push(nuevoComedor);
  res.status(201).json(nuevoComedor);
});

export default router;
