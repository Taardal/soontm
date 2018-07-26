import { fetchTMDbConfiguration } from "./theMovieDbService";
import {
  FETCH_CONFIGURATION_REQUEST,
  FETCH_CONFIGURATION_SUCCESS,
  FETCH_CONFIGURATION_FAILURE
} from "./actionTypes";

export const fetchConfigurationRequest = () => ({
  type: FETCH_CONFIGURATION_REQUEST
});

export const fetchConfigurationSuccess = body => ({
  type: FETCH_CONFIGURATION_SUCCESS,
  body
});

export const fetchConfigurationFailure = exception => ({
  type: FETCH_CONFIGURATION_FAILURE,
  exception
});

export const fetchConfiguration = () => dispatch => {
  dispatch(fetchConfigurationRequest());
  return fetchTMDbConfiguration()
    .then(body => dispatch(fetchConfigurationSuccess(body)))
    .catch(e => dispatch(fetchConfigurationFailure(e)));
};
