import { imageBaseUrl, isImageConfigLoading, isImageConfigError } from "./imageConfigReducer";
import {
  FETCH_IMAGE_CONFIG_REQUEST,
  FETCH_IMAGE_CONFIG_SUCCESS,
  FETCH_IMAGE_CONFIG_FAILURE
} from "./actionTypes";

describe("imageConfigReducer", () => {
  it("updates image base url on success action", () => {
    const galleryItemWidth = 100;
    const baseUrl = "base/url/to/image/api";
    const posterSizes = ["w96", "w" + (galleryItemWidth + 1)];
    const initialState = {};
    const action = {
      type: FETCH_IMAGE_CONFIG_SUCCESS,
      galleryItemWidth: galleryItemWidth,
      body: {
        images: {
          secure_base_url: baseUrl,
          poster_sizes: posterSizes
        }
      }
    };

    expect(imageBaseUrl(initialState, action)).toEqual(baseUrl + "/" + posterSizes[1]);
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
});
