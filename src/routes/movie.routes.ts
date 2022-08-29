import { PathMoviesController } from '../modules/movies/useCases/movies/pathMovies/PathMoviesController';
import { GetIdMoviesController } from '../modules/movies/useCases/movies/getIdMoviesUseCase/GetIdMoviesController';
import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/movies/createMovie/CreateMovieController";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCases/movies/getMoviesByReleaseDate/GetMoviesByReleaseDateController";
import { CreateMovieRentController } from '../modules/movies/useCases/moviesRent/createMovieRent/CreateMovieRentController';
import { DeleteMoviesController } from '../modules/movies/useCases/movies/deleteMovie/DeleteMoviesController';
import { GetAllMoviesRentsController } from '../modules/movies/useCases/moviesRent/getAllMoviesRents/GetAllMoviesRentsController';
import { PathMoviesRentsController } from '../modules/movies/useCases/moviesRent/pathMovieRent/PathMoviesRentsController';
import { DeleteMoviesRentsController } from '../modules/movies/useCases/moviesRent/deleteMovieRent/DeleteMoviesRentsController';

//MoviesConst
const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();
const getIdMoviesController = new GetIdMoviesController();
const patchMoviesController = new PathMoviesController();
const deleteMoviesController = new DeleteMoviesController();

//MoviesConst
const getAllMoviesRentsController = new GetAllMoviesRentsController();
const createMovieRentController = new CreateMovieRentController();
const pathMoviesRentsController = new PathMoviesRentsController();
const deleteMoviesRentsController = new DeleteMoviesRentsController();
const movieRoutes = Router();

// Movies
movieRoutes.get("/id", getIdMoviesController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle);
movieRoutes.post("/", createMovieController.handle);
movieRoutes.patch("/", patchMoviesController.handle);
movieRoutes.delete("/", deleteMoviesController.handle);

//MoviesRent
movieRoutes.post("/rent", createMovieRentController.handle);
movieRoutes.get("/rent", getAllMoviesRentsController.handle)
movieRoutes.patch("/rent", pathMoviesRentsController.handle);
movieRoutes.delete("/rent", deleteMoviesRentsController.handle);
export { movieRoutes };
