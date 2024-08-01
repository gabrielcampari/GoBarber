import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

// Rotas HTTP:

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;
    
    const createUser = new CreateUserService(); 
    console.log()
    const user = await createUser.execute({
      name, 
      email,
      password
    });

    return response.json(user); 
  } catch (err) {
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message });
    } else {
      return response.status(400).json({ error: 'An unknown error occurred' });
    }
  }
});

export default usersRouter;
