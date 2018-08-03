import { FETCH_VIDEOS_REQUEST, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE } from "./actionTypes";

export const videos = (state = {}, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_SUCCESS:
      const newState = { ...state };
      newState[action.body.id] = action.body.results;
      return newState;
    default:
      return state;
  }
};

export const isVideosLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_REQUEST:
      return true;
    case FETCH_VIDEOS_SUCCESS:
      return false;
    case FETCH_VIDEOS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const isVideosError = (state = false, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_REQUEST:
      return false;
    case FETCH_VIDEOS_SUCCESS:
      return false;
    case FETCH_VIDEOS_FAILURE:
      console.error(FETCH_VIDEOS_FAILURE + " [" + action.error + "]");
      return true;
    default:
      return state;
  }
};

export const getTrailerUrl = (state, movieId) => {
  if (state.videos && state.videos[movieId]) {
    const trailers = state.videos[movieId].filter(
      video => video.type === "Trailer" && video.site === "YouTube"
    );
    if (trailers && trailers.length > 0) {
      return "https://youtube.com/watch?v=" + trailers[0].key;
    }
  }
  return "";
};
