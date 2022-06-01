import { prisma } from "../prisma";

export const findAll = async () => {
    await prisma.user.findMany({});
};