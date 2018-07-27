import { fetchConfig } from "./theMovieDbService";
import {
  FETCH_IMAGE_CONFIG_REQUEST,
  FETCH_IMAGE_CONFIG_SUCCESS,
  FETCH_IMAGE_CONFIG_FAILURE
} from "./actionTypes";

export const fetchImageConfigRequest = () => ({
  type: FETCH_IMAGE_CONFIG_REQUEST
});

export const fetchImageConfigSuccess = (body, galleryItemWidth) => ({
  type: FETCH_IMAGE_CONFIG_SUCCESS,
  body,
  galleryItemWidth
});

export const fetchImageConfigFailure = error => ({
  type: FETCH_IMAGE_CONFIG_FAILURE,
  error
});

export const fetchImageConfig = galleryItemWidth => dispatch => {
  dispatch(fetchImageConfigRequest());
  return fetchConfig()
    .then(body => dispatch(fetchImageConfigSuccess(body, galleryItemWidth)))
    .catch(e => dispatch(fetchImageConfigFailure(e)));
};
