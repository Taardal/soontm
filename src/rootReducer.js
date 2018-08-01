import { combineReducers } from "redux";
import { movies, isMoviesLoading, isMoviesError } from "./moviesReducer";
import { imageConfig, isImageConfigLoading, isImageConfigError } from "./imageConfigReducer";

export default combineReducers({
  movies,
  isMoviesLoading,
  isMoviesError,
  imageConfig,
  isImageConfigLoading,
  isImageConfigError,
});
