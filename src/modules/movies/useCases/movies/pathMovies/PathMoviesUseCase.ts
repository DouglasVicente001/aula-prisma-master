
import { Request } from "express";
import { AppError } from "../../../../../errors/AppError";
import { prisma } from "../../../../../prisma/client";

export class PathMoviesUseCase {
    async execute(req: Request) {
        const moviesNoExists = await prisma.movie.findUnique({
            where: {
                id: req.body.id,
            }
        })
        if (!moviesNoExists) {
            throw new AppError(`Movies not found, ${req.body.id} no existis`)
        }

        const movie = await prisma.movie.update({
            data: {
               title: req.body.title,
            },
            where: {
                id: req.body.id,
            }
            })
        const result = (`movies update ${movie.id}completed ${req.body.title} sucessfull`)

        return result
    }
}