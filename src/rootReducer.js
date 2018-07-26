import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import configurationReducer from "./configurationReducer";

export default combineReducers({
  movies: moviesReducer,
  configuration: configurationReducer
});
