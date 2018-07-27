import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "./actionTypes";

export const movies = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return [...action.body.results];
    default:
      return state;
  }
};

export const isMoviesLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return true;
    case FETCH_MOVIES_SUCCESS:
      return false;
    case FETCH_MOVIES_FAILURE:
      return false;
    default:
      return state;
  }
};

export const isMoviesError = (state = false, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return false;
    case FETCH_MOVIES_SUCCESS:
      return false;
    case FETCH_MOVIES_FAILURE:
      console.error(action.exception);
      return true;
    default:
      return state;
  }
};
