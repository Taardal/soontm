import { FETCH_VIDEOS_REQUEST, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE } from "./actionTypes";
import { fetchMovieVideos } from "./theMovieDbService";

export const fetchVideosRequest = () => ({
  type: FETCH_VIDEOS_REQUEST
});

export const fetchVideosSuccess = body => ({
  type: FETCH_VIDEOS_SUCCESS,
  body
});

export const fetchVideosFailure = error => ({
  type: FETCH_VIDEOS_FAILURE,
  error
});

export const fetchVideos = movieId => dispatch => {
  dispatch(fetchVideosRequest());
  return fetchMovieVideos(movieId)
    .then(body => dispatch(fetchVideosSuccess(body)))
    .catch(e => dispatch(fetchVideosFailure(e)));
};