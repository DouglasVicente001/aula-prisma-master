import { Request, Response } from "express";
import { GetAllMoviesRentsUseCase } from "./GetAllMoviesRentsUseCase";


export class GetAllMoviesRentsController {
    async handle(req: Request, res: Response){
        const movieRent = new GetAllMoviesRentsUseCase();

        const result = await movieRent.execute();

        return res.status(201).send(result)
    }
}