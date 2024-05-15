import { createReducer, on } from "@ngrx/store";
import { getMovies } from "./movies.action";

export const initialState = { name: 'Hello World', id: 100 }

export const movieReducer = createReducer(initialState, on(getMovies, (state) => mockMovies()))

const mockMovies = () => {
    return { id: 1, name: 'Happy New Year!' }
}