import User from '../models/User'
import AppDataSource from '../database/index';

interface Request { 
  name: string;
  email: string; 
  password: string; 
}

class CreateUserService {
  public async execute({ name, email, password}: Request): Promise<User>{
    const usersRepository = AppDataSource.getRepository(User);
    const checkUserExists = await usersRepository.findOne({
      where: { email }, 
    });

    if (checkUserExists) {
      throw new Error('Email address already used.'); 
    }

    const user = usersRepository.create({
      name, 
      email, 
      password, 
    });
    await usersRepository.save(user);
    
    return user; 
  }
}

export default CreateUserService;