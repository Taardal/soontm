import { movies, isMoviesLoading, isMoviesError } from "./moviesReducer";
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "./actionTypes";

describe("movies", () => {
  it("updates movies on success action", () => {
    const initialState = [];
    const action = {
      type: FETCH_MOVIES_SUCCESS,
      body: {
        results: [
          {
            id: 1,
            title: "title 1"
          },
          {
            id: 2,
            title: "title 2"
          }
        ]
      }
    };
    expect(movies(initialState, action)).toEqual(action.body.results);
  });

  it("toggles loading state on actions", () => {
    const requestAction = {
      type: FETCH_MOVIES_REQUEST
    };
    const successAction = {
      type: FETCH_MOVIES_SUCCESS
    };
    const failureAction = {
      type: FETCH_MOVIES_FAILURE
    };

    expect(isMoviesLoading(false, requestAction)).toBe(true);
    expect(isMoviesLoading(true, successAction)).toBe(false);
    expect(isMoviesLoading(true, failureAction)).toBe(false);
  });

  it("toggles error state on actions", () => {
    const requestAction = {
      type: FETCH_MOVIES_REQUEST
    };
    const successAction = {
      type: FETCH_MOVIES_SUCCESS
    };
    const failureAction = {
      type: FETCH_MOVIES_FAILURE,
      error: "error"
    };

    expect(isMoviesError(false, requestAction)).toBe(false);
    expect(isMoviesError(false, successAction)).toBe(false);
    expect(isMoviesError(false, failureAction)).toBe(true);
  });
});
