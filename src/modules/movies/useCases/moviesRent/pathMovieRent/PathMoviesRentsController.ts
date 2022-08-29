import { Request, Response } from "express";
import { PathMoviesRentsUseCase } from "./PathMoviesRentsUseCase";


export class PathMoviesRentsController {
    async handle(req: Request, res: Response) {
        const pathMoviesRentsUseCase = new PathMoviesRentsUseCase();

        const result = await pathMoviesRentsUseCase.execute(req);

        return res.status(200).json(result)
    }
}