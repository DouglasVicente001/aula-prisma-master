
import { Request, Response } from "express";
import { AppError } from '../../../../errors/AppError';
import { prisma } from "../../../../prisma/client";


export class DeleteUsersUseCase {
    async execute(req: Request, res: Response) {
        const usersNoExists = await prisma.user.findUnique({
            where: {
                id: req.body.id,
            }
        });
        if (!usersNoExists) {
            throw new AppError(`Users not found, ${req.body.id} no existis`)
        }

        const user = await prisma.user.delete({
            where: {
                id: req.body.id,
            }
        });
        const result = (`Users update ${user.id}completed ${req.body.email} sucessfull`)

        return result
    }
}