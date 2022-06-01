import { Router } from "express"

import * as UserControllers from '../controllers/user.controller'

export const routes = Router()

routes.get('/', UserControllers.getAllUsers);


