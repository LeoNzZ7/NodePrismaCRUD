import { Request, Response } from "express";

import * as UsersServices from '../services/user.service'

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await UsersServices.findAll();

    res.json({users: users})
}