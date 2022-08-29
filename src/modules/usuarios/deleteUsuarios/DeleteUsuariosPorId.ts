import { Request } from "express";
import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";



export class DeleteUsuariosPorId {
    async execute(req: Request) {
        const usuarioNaoExiste = await prisma.usuario.findUnique({
            where: {
                 //@ts-ignore
                id: req.query.id
            }
        })
        if (!usuarioNaoExiste) {
            throw new AppError(`Usuário com ID '${req.query.id}' não foi encontrado`, 404)
        }

        const usuario = await prisma.usuario.delete({
            where: {
                 //@ts-ignore
                id: req.query.id,
            },
        });

        const result = (`O usuário '${usuario.email}' com ID '${req.query.id}' foi excluido com sucesso`);

        return result;
    }
}