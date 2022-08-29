import { Request, Response } from "express";
import { DeleteMoviesRentsUseCase } from "./DeleteMoviesRentsUseCase";


export class DeleteMoviesRentsController{
    async handle(req: Request, res: Response){
        const deleteMovieRent = new DeleteMoviesRentsUseCase();

        const result = await deleteMovieRent.execute(req, res);

        return res.status(200).json(result)
    }
}