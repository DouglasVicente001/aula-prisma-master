import { Movie } from '@prisma/client';

import { Request, Response } from "express";
import { GetIdMoviesUseCase } from "./GetIdMoviesUseCase";


export class GetIdMoviesController {
  async handle(req: Request, res: Response) {
    const getIdMoviesUseCase = new GetIdMoviesUseCase();

    const result = await getIdMoviesUseCase.execute(req, res);
    return res.status(200).json(result);
  }
}
