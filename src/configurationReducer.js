import {
  FETCH_CONFIGURATION_REQUEST,
  FETCH_CONFIGURATION_SUCCESS,
  FETCH_CONFIGURATION_FAILURE
} from "./actionTypes";

const configurationReducer = (configuration = {}, action) => {
  switch (action.type) {
    case FETCH_CONFIGURATION_REQUEST:
      return configuration;
    case FETCH_CONFIGURATION_SUCCESS:
      return action.body;
    case FETCH_CONFIGURATION_FAILURE:
      console.error(FETCH_CONFIGURATION_FAILURE + " [" + action.exception + "]");
      return configuration;
    default:
      return configuration;
  }
};

export const getPosterBaseUrl = (smallestWidthAllowed, state) => {
  const imageConfiguration = state.configuration.images;
  if (imageConfiguration) {
    const secureBaseUrl = imageConfiguration.secure_base_url;
    const posterSizes = imageConfiguration.poster_sizes;
    if (secureBaseUrl && posterSizes) {
      const posterSize = posterSizes
        .filter(posterSize => posterSize.startsWith("w"))
        .find(posterSize => parseInt(posterSize.substring(1, posterSize.length)) > smallestWidthAllowed);
      return secureBaseUrl + posterSize;
    }
  }
  return "";
};

export default configurationReducer;
