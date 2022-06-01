import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
    log: ['query']
});

export const UserServices = {
    findAll: async () => {
        return await prisma.user.findMany({});
    },

    findUser: async (email: string) => {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if(user) {
            return user.id;
        } else {
            return null;
        }
    },

    createUser: async (email: string, password: string, firstName: string, lastName?: string, age?: number) => {
        const newUser = await prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName,
                age
            }
        });

        return newUser.id;
    },

    login: async (email: string, password: string) => {
        const user = await prisma.user.findUnique({
            where: {email}
        })

        if(user?.email === email) {
            if(user.password === password) {
                return user.id;
            } else {
                return new Error('Senha incorreta');
            }
        } else {
            return new Error('Email inválido');
        }

    }
}