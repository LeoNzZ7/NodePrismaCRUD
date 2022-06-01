import { Request, Response } from "express";

import { UserServices } from "../services/user.service";

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await UserServices.findAll();

    res.json({users: users})
};

export const registerUser = async (req: Request, res: Response) => {
    const {email, password, firstName, lastName, age} = req.body;

    const user = await UserServices.findUser(email);

    if(!user) {
        const newUser = await UserServices.createUser(email, password, firstName, lastName, age);
        
        res.json(newUser);
    } else {
        res.json({Error: "Usuário ja existente"});
    }
};

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    const user = await UserServices.login(email, password);

    res.json({user});
};