import { fetchConfig } from "./theMovieDbService";
import {
  FETCH_TMDB_CONFIG_REQUEST,
  FETCH_TMDB_CONFIG_SUCCESS,
  FETCH_TMDB_CONFIG_FAILURE
} from "./actionTypes";

export const fetchTmdbConfigRequest = () => ({
  type: FETCH_TMDB_CONFIG_REQUEST
});

export const fetchTmdbConfigSuccess = body => ({
  type: FETCH_TMDB_CONFIG_SUCCESS,
  body
});

export const fetchTmdbConfigFailure = exception => ({
  type: FETCH_TMDB_CONFIG_FAILURE,
  exception
});

export const fetchTmdbConfig = () => dispatch => {
  dispatch(fetchTmdbConfigRequest());
  return fetchConfig()
    .then(body => dispatch(fetchTmdbConfigSuccess(body)))
    .catch(e => dispatch(fetchTmdbConfigFailure(e)));
};
