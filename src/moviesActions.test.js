import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./actionTypes";
import {
  fetchMovies,
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure
} from "./moviesActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("movieActions", () => {
  it("fetches movies", () => {
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

    const expectedActions = [
      { type: FETCH_MOVIES_REQUEST },
      { type: FETCH_MOVIES_SUCCESS, body: { movies } }
    ];

    return store.dispatch(fetchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});