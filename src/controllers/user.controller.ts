import { prisma } from "@prisma/client";
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

    if(user) {
        res.json({user})
    };

    res.json("Email ou senha estão incorretos")
};

export const updateUser = async (req: Request, res: Response) => {
    const {id, email, password, firstName, lastName, age} = req.body;

    if(id) {
        const updateUser = await UserServices.updateUser(id, email, password, firstName, lastName, age);
        
        if(updateUser) {
            res.json(updateUser)
        } else {
            res.json({Error: "Ocorreu um erro ao atualizar as informações do usuário"})
        };
    } else {
        res.json({Error: "id não encontrado"});
    };
}

export const deleteUser = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    const user = await UserServices.findUser(email)

    if(user) {
        await UserServices.deleteUser(email, password);

        res.json("Usuário deletado");
    } else {
        res.json("Usuário não existe"); 
    };
}