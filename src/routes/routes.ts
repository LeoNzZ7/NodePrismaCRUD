import { Router } from "express"

import * as UserControllers from '../controllers/user.controller'

export const routes = Router()

routes.get('/', UserControllers.getAllUsers);
routes.post('/register', UserControllers.registerUser);
routes.post('/login', UserControllers.login);
routes.put('/login',)
routes.delete('/login',)


