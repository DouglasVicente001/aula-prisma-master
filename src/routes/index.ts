import { Router } from "express";

import { movieRoutes } from "./movie.routes";
import { userRoutes } from "./user.routes";
import { usuarioRoutes } from "./usuario.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes);
routes.use("/usuarios", usuarioRoutes)
export { routes };
