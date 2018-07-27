import {
  FETCH_TMDB_CONFIG_REQUEST,
  FETCH_TMDB_CONFIG_SUCCESS,
  FETCH_TMDB_CONFIG_FAILURE
} from "./actionTypes";

export const tmdbConfig = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TMDB_CONFIG_SUCCESS:
      return action.body;
    default:
      return state;
  }
};

export const isTmdbConfigLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_TMDB_CONFIG_REQUEST:
      return true;
    case FETCH_TMDB_CONFIG_SUCCESS || FETCH_TMDB_CONFIG_FAILURE:
      return false;
    default:
      return state;
  }
};

export const isTmdbConfigError = (state = false, action) => {
  switch (action.type) {
    case FETCH_TMDB_CONFIG_FAILURE:
      console.error(FETCH_TMDB_CONFIG_FAILURE + " [" + action.exception + "]");
      return true;
    case FETCH_TMDB_CONFIG_REQUEST || FETCH_TMDB_CONFIG_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const getPosterBaseUrl = (smallestWidthAllowed, state) => {
  const imageConfig = state.tmdbConfig.images;
  if (imageConfig) {
    const secureBaseUrl = imageConfig.secure_base_url;
    const posterSizes = imageConfig.poster_sizes;
    if (secureBaseUrl && posterSizes) {
      const tmdbImageWidth = posterSizes
        .filter(posterSize => posterSize.startsWith("w"))
        .find(posterSize => parseInt(posterSize.substring(1, posterSize.length)) > smallestWidthAllowed);
      return secureBaseUrl + tmdbImageWidth;
    }
  }
  return "";
};
