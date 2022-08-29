import { Request, Response } from "express";
import { PathMoviesUseCase } from "./pathMoviesUseCase";


export class PathMoviesController {
    async handle(req: Request, res: Response) {
        const pathMoviesUseCase = new PathMoviesUseCase();

        const result = await pathMoviesUseCase.execute(req);

        return res.status(200).json(result)
    }
}