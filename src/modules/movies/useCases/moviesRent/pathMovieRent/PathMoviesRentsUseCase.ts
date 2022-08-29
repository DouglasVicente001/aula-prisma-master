import { Request, response } from "express";
import { AppError } from "../../../../../errors/AppError";
import { prisma } from "../../../../../prisma/client";


export class PathMoviesRentsUseCase {
    async execute(req: Request) {
    try{ 
        const oldUser = await prisma.user.findUnique({
            where: {
                id: req.body.oldUserId,
            },
        });

        if (!oldUser) {
            throw new AppError(`old user not registered.`,404)
        }

        const oldMovie = await prisma.movie.findUnique({
            where: {
                id: req.body.oldMovieId,
            }
        });

        if (!oldMovie) {
            throw new AppError('old movie not registered.',404)
        }

        const newUser = await prisma.user.findUnique({
            where:{
                id: req.body.newUserId,
            }
        });

        if(!newUser){
            throw new AppError('new user not registered.', 404)
        }

        const newMovie = await prisma.movie.findUnique({
            where:{
                id: req.body.newMovieId,
            }
        });

        if(!newMovie){
            throw new AppError('new movie not registered.', 404)
        }

         await prisma.movieRent.update({
          data:{
            userId: req.body.newUserId,
            movieId: req.body.newMovieId,
          },
          where:{
            userId_movieId:{
                userId: req.body.oldUserId,
                movieId: req.body.oldMovieId,
            }
          }
        });

        const result = 'Completed edition'
        return result
    }catch{
        return response.status(404)
    }
    }
}