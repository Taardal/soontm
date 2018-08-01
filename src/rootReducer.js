import { combineReducers } from "redux";
import { movies, isMoviesLoading, isMoviesError } from "./moviesReducer";
import { imageConfig, isImageConfigLoading, isImageConfigError } from "./imageConfigReducer";
import { languages, isLanguagesLoading, isLanguagesError } from "./languagesReducer";

export default combineReducers({
  movies,
  isMoviesLoading,
  isMoviesError,
  imageConfig,
  isImageConfigLoading,
  isImageConfigError,
  languages,
  isLanguagesLoading,
  isLanguagesError
});
