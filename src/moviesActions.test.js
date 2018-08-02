import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "./actionTypes";
import { fetchMovies, fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } from "./moviesActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("movieActions", () => {
  it("dispatches success action when movies request was successful", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const movies = {
      results: [
        {
          id: 353081,
          title: "Mission: Impossible - Fallout"
        }
      ]
    };

    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => ({ movies })
      })
    );

    return store.dispatch(fetchMovies()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: FETCH_MOVIES_REQUEST
        },
        {
          type: FETCH_MOVIES_SUCCESS,
          body: {
            movies
          }
        }
      ]);
    });
  });

  it("dispatches failure action when movies request failed", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const error = "Error";

    fetch = jest.fn(() => Promise.reject(error));

    return store.dispatch(fetchMovies()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: FETCH_MOVIES_REQUEST
        },
        {
          type: FETCH_MOVIES_FAILURE,
          error: error
        }
      ]);
    });
  });
});
