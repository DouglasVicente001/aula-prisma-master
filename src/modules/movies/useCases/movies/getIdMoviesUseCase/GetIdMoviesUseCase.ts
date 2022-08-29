
import { Movie } from "@prisma/client";
import { Request, request, Response } from "express";
import { prisma } from "../../../../../prisma/client";

export class GetIdMoviesUseCase {
  
  async execute(req: Request, res: Response){
    
    const movies = await prisma.movie.findUnique({
      where: {
        title: req.body.title
      },
      include: {
        movie_rent: {
          select: {
            movie: {
              select: {
                id: true,
                title: true,
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
