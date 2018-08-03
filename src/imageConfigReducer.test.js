import {
  imageConfig,
  isImageConfigLoading,
  isImageConfigError,
  getPosterUrl,
  getBackdropUrl
} from "./imageConfigReducer";
import {
  FETCH_IMAGE_CONFIG_REQUEST,
  FETCH_IMAGE_CONFIG_SUCCESS,
  FETCH_IMAGE_CONFIG_FAILURE
} from "./actionTypes";

describe("imageConfigReducer", () => {
  it("updates state on success action", () => {
    const imageConfiguration = {
      imageConfig: {
        secure_base_url: "image/api/base/url",
        poster_sizes: ["w96", "w154"]
      }
    };
    const initialState = {};
    const action = {
      type: FETCH_IMAGE_CONFIG_SUCCESS,
      body: imageConfiguration
    };

    expect(imageConfig(initialState, action)).toEqual(imageConfiguration.images);
  });

  it("toggles loading state on actions", () => {
    const requestAction = {
      type: FETCH_IMAGE_CONFIG_REQUEST
    };
    const successAction = {
      type: FETCH_IMAGE_CONFIG_SUCCESS
    };
    const failureAction = {
      type: FETCH_IMAGE_CONFIG_FAILURE
    };

    expect(isImageConfigLoading(false, requestAction)).toBe(true);
    expect(isImageConfigLoading(true, successAction)).toBe(false);
    expect(isImageConfigLoading(true, failureAction)).toBe(false);
  });

  it("toggles error state on actions", () => {
    const requestAction = {
      type: FETCH_IMAGE_CONFIG_REQUEST
    };
    const successAction = {
      type: FETCH_IMAGE_CONFIG_SUCCESS
    };
    const failureAction = {
      type: FETCH_IMAGE_CONFIG_FAILURE,
      error: "error"
    };

    expect(isImageConfigError(false, requestAction)).toBe(false);
    expect(isImageConfigError(false, successAction)).toBe(false);
    expect(isImageConfigError(false, failureAction)).toBe(true);
  });

  it("selects poster url with width equal-to-or-larger-than gallery item width", () => {
    const targetWidth = 154;
    const galleryItemWidth = targetWidth - 1;
    const state = {
      imageConfig: {
        secure_base_url: "image/api/base/url/",
        poster_sizes: ["w96", "w" + targetWidth, "w320"]
      }
    };
    const movie = {
      id: 1,
      poster_path: "/poster.path"
    };

    expect(getPosterUrl(state, movie.poster_path, galleryItemWidth)).toEqual(
      "image/api/base/url/w" + targetWidth + movie.poster_path
    );
  });

  it("selects backdrop url with width equal-to-or-larger-than screen width", () => {
    const targetWidth = 720;
    const screenWidth = targetWidth - 1;
    const state = {
      imageConfig: {
        secure_base_url: "image/api/base/url/",
        backdrop_sizes: ["w320", "w" + targetWidth, "w1080"]
      },
      dimensions: {
        width: 600,
        height: 600
      }
    };
    const movie = {
      id: 1,
      backdrop_path: "/backdrop.path"
    };

    expect(getBackdropUrl(state, movie.backdrop_path, screenWidth)).toEqual(
      "image/api/base/url/w" + targetWidth + movie.backdrop_path
    );
  });
});
