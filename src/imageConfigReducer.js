import {
  FETCH_IMAGE_CONFIG_REQUEST,
  FETCH_IMAGE_CONFIG_SUCCESS,
  FETCH_IMAGE_CONFIG_FAILURE
} from "./actionTypes";

export const imageBaseUrl = (state = "", action) => {
  switch (action.type) {
    case FETCH_IMAGE_CONFIG_SUCCESS:
      return getBaseUrl(action.body.images, action.galleryItemWidth);
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
      console.error(FETCH_IMAGE_CONFIG_FAILURE + " [" + action.exception + "]");
      return true;
    default:
      return state;
  }
};

const getBaseUrl = (imageConfig, smallestWidthAllowed) => {
  const secureBaseUrl = imageConfig.secure_base_url + (!imageConfig.secure_base_url.endsWith("/") ? "/" : "");
  const posterSize = imageConfig.poster_sizes
    .filter(posterSize => posterSize.startsWith("w"))
    .find(posterSize => parseInt(posterSize.substring(1, posterSize.length)) > smallestWidthAllowed);
  return secureBaseUrl + posterSize;
};
