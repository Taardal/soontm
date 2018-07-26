import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./actionTypes";

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return movies;
    case FETCH_MOVIES_SUCCESS:
      return [...action.body.results];
    case FETCH_MOVIES_FAILURE:
      console.error(FETCH_MOVIES_FAILURE + "[" + action.exception + "]");
      return movies;
    default:
      return movies;
  }
};

export default moviesReducer;
