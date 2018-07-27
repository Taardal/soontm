import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  FETCH_TMDB_CONFIG_REQUEST,
  FETCH_TMDB_CONFIG_SUCCESS,
  FETCH_TMDB_CONFIG_FAILURE
} from "./actionTypes";
import {
  fetchTmdbConfig,
  fetchTmdbConfigRequest,
  fetchTmdbConfigSuccess,
  fetchTmdbConfigFailure
} from "./TmdbConfigActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("tmdbConfigActions", () => {
  it("fetches TMDb configuration", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const tmdbConfig = {
      images: {
        poster_sizes: [
          "w92",
          "w156"
        ]
      }
    };
    
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => ({ tmdbConfig })
      })
    );

    const expectedActions = [
      { type: FETCH_TMDB_CONFIG_REQUEST },
      { type: FETCH_TMDB_CONFIG_SUCCESS, body: { tmdbConfig } }
    ];

    return store.dispatch(fetchTmdbConfig()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
