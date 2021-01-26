/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';

const routes = Router();

routes.get('/users', (request, response) => {
  const { name, email } = request.body;

  const User = {
    name,
    email
  };

  response.json(User)
});

export default routes;
