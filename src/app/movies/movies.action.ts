import { createAction, props } from "@ngrx/store";
import { Movie } from "./movie.model";

export const getMovies = createAction('[Movies] Get Movies')
export const getMoviesSuccess = createAction('[Movies] Get Movies')
export const addMovies = createAction('[Movies] Get Movies', props<{ movie: Movie }>())

