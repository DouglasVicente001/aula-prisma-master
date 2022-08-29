import { Request } from "express"
import { AppError } from "../../../../errors/AppError"
import { prisma } from "../../../../prisma/client"

export class PathUsersUseCase {
    async execute(req: Request) {
        const usersNoExists = await prisma.user.findUnique({
            where: {
                id: req.body.id,
            }
        })
        if (!usersNoExists) {
            throw new AppError(`User not found, ${req.body.id} no existis`)
        }

        const user = await prisma.user.update({
            data: {
               email: req.body.email,
               
            },
            where: {
                id: req.body.id,
            }
            })
        const result = (`User update ${user.id}completed ${req.body.title} sucessfull`)

        return result
    }
}