import {
  FETCH_IMAGE_CONFIG_REQUEST,
  FETCH_IMAGE_CONFIG_SUCCESS,
  FETCH_IMAGE_CONFIG_FAILURE
} from "./actionTypes";

export const imageConfig = (state = {}, action) => {
  switch (action.type) {
    case FETCH_IMAGE_CONFIG_SUCCESS:
      return action.body.images;
    default:
      return state;
  }
};

export const isImageConfigLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_IMAGE_CONFIG_REQUEST:
      return true;
    case FETCH_IMAGE_CONFIG_SUCCESS:
      return false;
    case FETCH_IMAGE_CONFIG_FAILURE:
      return false;
    default:
      return state;
  }
};

export const isImageConfigError = (state = false, action) => {
  switch (action.type) {
    case FETCH_IMAGE_CONFIG_REQUEST:
      return false;
    case FETCH_IMAGE_CONFIG_SUCCESS:
      return false;
    case FETCH_IMAGE_CONFIG_FAILURE:
      console.error(FETCH_IMAGE_CONFIG_FAILURE + " [" + action.error + "]");
      return true;
    default:
      return state;
  }
};

export const getPosterUrl = (state, posterPath, smallestWidthAllowed) => {
  if (state.imageConfig) {
    const secureBaseUrl = state.imageConfig.secure_base_url;
    const posterSizes = state.imageConfig.poster_sizes;
    if (secureBaseUrl && posterSizes) {
      const widthClass = getImageWidthClass(posterSizes, smallestWidthAllowed);
      return secureBaseUrl + widthClass + posterPath;
    }
  }
};

export const getBackdropUrl = (state, backdropPath, smallestWidthAllowed) => {
    if (state.imageConfig) {
    const secureBaseUrl = state.imageConfig.secure_base_url;
    const backdropSizes = state.imageConfig.backdrop_sizes;
    if (secureBaseUrl && backdropSizes) {
      const widthClass = getImageWidthClass(backdropSizes, smallestWidthAllowed);
      return secureBaseUrl + widthClass + backdropPath;
    }
  }
};

const getImageWidthClass = (sizes, smallestWidthAllowed) => {
  return sizes
    .filter(size => size.startsWith("w"))
    .find(size => parseInt(size.substring(1, size.length)) > smallestWidthAllowed);
};
