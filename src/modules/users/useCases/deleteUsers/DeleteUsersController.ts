import { Request, Response } from "express";
import { DeleteUsersUseCase } from "./DeleteUsersUseCase";


export class DeleteUsersController{
    async handle(req: Request, res: Response){
        const deleteUsersUseCase = new DeleteUsersUseCase();

        const result = await deleteUsersUseCase.execute(req, res);

        return res.status(200).json(result)
    }
}