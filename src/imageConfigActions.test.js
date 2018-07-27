import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  FETCH_IMAGE_CONFIG_REQUEST,
  FETCH_IMAGE_CONFIG_SUCCESS,
  FETCH_IMAGE_CONFIG_FAILURE
} from "./actionTypes";
import {
  fetchImageConfig,
  fetchImageConfigRequest,
  fetchImageConfigSuccess,
  fetchImageConfigFailure
} from "./imageConfigActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("imageConfigActions", () => {
  it("dispatches success action when image config request was successful", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const imageConfig = {
      baseUrl: "url/to/image/api"
    };

    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => ({
          imageConfig
        })
      })
    );

    return store.dispatch(fetchImageConfig()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: FETCH_IMAGE_CONFIG_REQUEST
        },
        {
          type: FETCH_IMAGE_CONFIG_SUCCESS,
          body: {
            imageConfig
          }
        }
      ]);
    });
  });

  it("dispatches failure action when image config request failed", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const error = "Error";

    fetch = jest.fn(() => Promise.reject(error));

    return store.dispatch(fetchImageConfig()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: FETCH_IMAGE_CONFIG_REQUEST
        },
        {
          type: FETCH_IMAGE_CONFIG_FAILURE,
          error: error
        }
      ]);
    });
  });
});
