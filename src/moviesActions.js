import { fetchUpcomingMovies } from "./theMovieDbService";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./actionTypes";

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST
});

export const fetchMoviesSuccess = body => ({
  type: FETCH_MOVIES_SUCCESS,
  body
});

export const fetchMoviesFailure = exception => ({
  type: FETCH_MOVIES_FAILURE,
  exception
});

export const fetchMovies = () => dispatch => {
  dispatch(fetchMoviesRequest());
  return fetchUpcomingMovies()
    .then(body => dispatch(fetchMoviesSuccess(body)))
    .catch(e => dispatch(fetchMoviesFailure(e)));
};