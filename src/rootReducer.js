import { combineReducers } from "redux";
import { movies, isMoviesLoading, isMoviesError } from "./moviesReducer";
import { imageBaseUrl, isImageConfigLoading, isImageConfigError } from "./imageConfigReducer";

export default combineReducers({
  movies,
  isMoviesLoading,
  isMoviesError,
  imageBaseUrl,
  isImageConfigLoading,
  isImageConfigError,
});
