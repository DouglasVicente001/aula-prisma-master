import { Request, Response } from 'express';
import { AppError } from '../../../../../errors/AppError';
import { prisma } from '../../../../../prisma/client';
export class DeleteMoviesRentsUseCase {
    async execute(req: Request, res: Response) {
        
        const user = await prisma.user.findUnique({
            where: {
                id: req.body.userId
            },
        });

        if (!user) {
            throw new AppError(`user not found`, 404)
        }

        const movie = await prisma.movie.findUnique({
            where: {
                id: req.body.movieId,
            }
        });

        if (!movie) {
            throw new AppError('user not found.', 404)
        }

        await prisma.movieRent.delete({
            where: {
                userId_movieId: {
                    userId: req.body.userId,
                    movieId: req.body.movieId,
                }
            }
        });

        const result = 'Delete completed'
        return result
    }
}