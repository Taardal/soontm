import { fetchConfig } from "./theMovieDbService";
import {
  FETCH_IMAGE_CONFIG_REQUEST,
  FETCH_IMAGE_CONFIG_SUCCESS,
  FETCH_IMAGE_CONFIG_FAILURE
} from "./actionTypes";

export const fetchImageConfigRequest = () => ({
  type: FETCH_IMAGE_CONFIG_REQUEST
});

export const fetchImageConfigSuccess = (body) => ({
  type: FETCH_IMAGE_CONFIG_SUCCESS,
  body
});

export const fetchImageConfigFailure = error => ({
  type: FETCH_IMAGE_CONFIG_FAILURE,
  error
});

export const fetchImageConfig = () => dispatch => {
  dispatch(fetchImageConfigRequest());
  return fetchConfig()
    .then(body => dispatch(fetchImageConfigSuccess(body)))
    .catch(e => dispatch(fetchImageConfigFailure(e)));
};
