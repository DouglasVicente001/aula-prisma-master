import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { DeleteUsersController } from "../modules/users/useCases/deleteUsers/DeleteUsersController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";
import { GetIdUsersController } from "../modules/users/useCases/getIdUsers/GetIdUsersController";
import { PathUsersController } from "../modules/users/useCases/pathUsers/PathUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getIdUsersController = new GetIdUsersController();
const pathUsersController = new PathUsersController();
const deleteUsersController = new DeleteUsersController();
const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
userRoutes.get("/id", getIdUsersController.handle);
userRoutes.patch("/", pathUsersController.handle)
userRoutes.delete("/", deleteUsersController.handle);
export { userRoutes };
