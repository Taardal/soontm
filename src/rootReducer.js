import { combineReducers } from "redux";
import { movies, isMoviesLoading, isMoviesError } from "./moviesReducer";
import { tmdbConfig, isTmdbConfigLoading, isTmdbConfigError } from "./tmdbConfigReducer";

export default combineReducers({
  movies,
  isMoviesLoading,
  isMoviesError,
  tmdbConfig,
  isTmdbConfigLoading,
  isTmdbConfigError,
});
