import { Router } from 'express';
import { CreateUser } from '../application/CreateUser';

const router = Router();
const createUser = new CreateUser();

router.post('/users', (req, res) => {
  const { name } = req.body;
  const user = createUser.execute(name);
  res.status(201).json(user);
});

export default router;
