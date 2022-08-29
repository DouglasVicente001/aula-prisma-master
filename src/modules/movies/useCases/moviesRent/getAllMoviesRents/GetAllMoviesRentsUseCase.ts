import { MovieRent } from "@prisma/client";
import { AppError } from "../../../../../errors/AppError";
import { prisma } from "../../../../../prisma/client";



export class GetAllMoviesRentsUseCase {
    async execute(): Promise<MovieRent[]> {
        const movieRent = await prisma.movieRent.findMany({
            include: {
                movie: {
                    select: {
                        title: true,
                        duration: true,
                        release_date: true
                    },
                },
                user: {
                    select: {
                        name: true,
                        email: true,
                        created_at: true,
                        updated_at: true,
                    }
                }
            },
        })
        if (movieRent.length == 0) {
            throw new AppError('movie rent not found', 404)
        }
        return movieRent;
    }
}