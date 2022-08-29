import { Request, Response } from "express";
import { DeleteMoviesUseCase } from "./DeleteMoviesUseCase";


export class DeleteMoviesController {
    async handle(req: Request, res: Response) {
        const deleteMoviesUseCase = new DeleteMoviesUseCase();

        const result = await deleteMoviesUseCase.execute(req, res);

        return res.status(200).json(result)
    }
}