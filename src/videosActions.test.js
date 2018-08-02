import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FETCH_VIDEOS_REQUEST, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE } from "./actionTypes";
import { fetchVideos } from "./videosActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("videosActions", () => {
  it("dispatches success action when videos request was successful", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const movieId = 353081;
    const response = {
      id: movieId,
      results: [
        {
          id: "5a77b31e925141775c0082c6",
          iso_639_1: "en",
          iso_3166_1: "US",
          key: "wb49-oV0F78",
          name: "Mission: Impossible - Fallout (2018) - Official Trailer - Paramount Pictures",
          site: "YouTube",
          size: 1080,
          type: "Trailer"
        }
      ]
    };

    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => response
      })
    );

    return store.dispatch(fetchVideos(movieId)).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: FETCH_VIDEOS_REQUEST
        },
        {
          type: FETCH_VIDEOS_SUCCESS,
          body: response
        }
      ]);
    });
  });

  it("dispatches failure action when videos request failed", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const movieId = 123;
    const error = "Error";

    fetch = jest.fn(() => Promise.reject(error));

    return store.dispatch(fetchVideos(movieId)).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: FETCH_VIDEOS_REQUEST
        },
        {
          type: FETCH_VIDEOS_FAILURE,
          error: error
        }
      ]);
    });
  });
});
