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
      const foo = [...movies, ...action.body.movies];
      console.log(foo);
      return foo;
    case FETCH_MOVIES_FAILURE:
      return movies;
    default:
      return movies;
  }
};

export default moviesReducer;
