import { FETCH_LANGUAGES_REQUEST, FETCH_LANGUAGES_SUCCESS, FETCH_LANGUAGES_FAILURE } from "./actionTypes";
import { fetchAllLanguages } from "./theMovieDbService";

export const fetchLanguagesRequest = () => ({
  type: FETCH_LANGUAGES_REQUEST
});

export const fetchLanguagesSuccess = body => ({
  type: FETCH_LANGUAGES_SUCCESS,
  body
});

export const fetchLanguagesFailure = error => ({
  type: FETCH_LANGUAGES_FAILURE,
  error
});

export const fetchLanguages = () => dispatch => {
  dispatch(fetchLanguagesRequest());
  return fetchAllLanguages()
    .then(body => dispatch(fetchLanguagesSuccess(body)))
    .catch(e => dispatch(fetchLanguagesFailure(e)));
};
