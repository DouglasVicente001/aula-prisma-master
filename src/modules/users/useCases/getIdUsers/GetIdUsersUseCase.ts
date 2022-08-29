import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export class GetIdUsersUseCase {
    async execute(req: Request, res: Response) {

        const movies = await prisma.user.findUnique({
            where: {
                id: req.body.id,
            },
            include: {
                movie_rent: {
                    select: {
                        user: {
                            select: {
                                id: true,
                                email: true,
                                movie_rent: true
                            }
                        }
                    }

                }
            }

        })

        return movies;
    }
}
