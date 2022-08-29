import { Request, Response } from "express";
import { AppError } from "../../../../../errors/AppError";
import { prisma } from "../../../../../prisma/client";

export class DeleteMoviesUseCase {
    async execute(req: Request, res: Response) {
        const moviesNoExists = await prisma.movie.findUnique({
            where: {
                id: req.body.id,
            }
        });
        if (!moviesNoExists) {
            throw new AppError(`Movies not found, ${req.body.id} no existis`)
        }

        const movie = await prisma.movie.delete({
            where: {
                id: req.body.id,
            }
        });
        const result = (`movies update ${movie.id}completed ${req.body.title} sucessfull`)

        return result
    }
}