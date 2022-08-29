import { Request, Response } from 'express';
import { GetIdUsersUseCase } from './GetIdUsersUseCase';
export class GetIdUsersController {

    async handle(req: Request, res: Response) {

        const getIdUsersUseCase = new GetIdUsersUseCase()

        const result = await getIdUsersUseCase.execute(req, res);

        return res.status(200).json(result);
    }
}