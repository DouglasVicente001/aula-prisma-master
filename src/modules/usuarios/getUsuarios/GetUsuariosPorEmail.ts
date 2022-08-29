import { Request } from "express";
import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";



export class GetUsuariosPorEmail {
    async execute(req: Request) {
        const usuario = await prisma.usuario.findUnique({
            where: {
                //@ts-ignore
                email: req.query.email,
            },
            select: {
                id: true,
                email: true,
                criado_em: true,
            }
        })

        if (usuario == null) {
            throw new AppError(`Usuário com e-mail '${req.query.email}' não foi encontrado`, 404)
        }

        return usuario
    }
}