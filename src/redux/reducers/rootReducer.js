import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { genresReducer } from "./genresReducer";
import { filtersReducer } from "./filtersReducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  filters: filtersReducer,
});
