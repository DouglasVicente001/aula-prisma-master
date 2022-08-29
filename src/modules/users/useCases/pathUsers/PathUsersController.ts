import { Request, Response } from "express";
import { PathUsersUseCase } from "./PathUsersUseCase";



export class PathUsersController {
    async handle(req: Request, res: Response) {
        const pathUsersUseCase = new PathUsersUseCase();

        const result = await pathUsersUseCase.execute(req);

        return res.status(200).json(result)
    }
}