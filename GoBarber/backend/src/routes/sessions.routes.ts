import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

interface UserResponse {
  id: string;
  name: string;
  email: string;
  password?: string;
  created_at: Date;
  updated_at: Date;
}

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } =  request.body;

    const authenticateUser =  new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    const userResponse: UserResponse = { ...user }

    delete userResponse.password;

    return response.json({ userResponse, token })
  }catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default sessionsRouter;
