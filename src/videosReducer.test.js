import { FETCH_VIDEOS_REQUEST, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE } from "./actionTypes";
import { videos, isVideosLoading, isVideosError, getTrailerUrl } from "./videosReducer";

describe("videosReducer", () => {
  it("updates state on success action", () => {
    const initialState = {};
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
    const action = {
      type: FETCH_VIDEOS_SUCCESS,
      body: response
    };

    const state = videos(initialState, action);

    expect(state[movieId]).toEqual(response.results);
  });

  it("does not change existing state", () => {
    const initialState = {};
    const existingId = 123;
    const existingVideos = [
      {
        id: "such_id",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "wb49-oV0F78",
        name: "Mission: Impossible - Fallout (2018) - Official Trailer - Paramount Pictures",
        site: "YouTube",
        size: 1080,
        type: "Trailer"
      }
    ];
    const responseId = 353081;
    const response = {
      id: responseId,
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
    const action = {
      type: FETCH_VIDEOS_SUCCESS,
      body: response
    };

    initialState[existingId] = existingVideos;
    const state = videos(initialState, action);

    expect(state[existingId]).toEqual(existingVideos);
    expect(state[responseId]).toEqual(response.results);
  });

  it("toggles loading state on actions", () => {
    const requestAction = {
      type: FETCH_VIDEOS_REQUEST
    };
    const successAction = {
      type: FETCH_VIDEOS_SUCCESS
    };
    const failureAction = {
      type: FETCH_VIDEOS_FAILURE
    };

    expect(isVideosLoading(false, requestAction)).toBe(true);
    expect(isVideosLoading(true, successAction)).toBe(false);
    expect(isVideosLoading(true, failureAction)).toBe(false);
  });

  it("toggles error state on actions", () => {
    const requestAction = {
      type: FETCH_VIDEOS_REQUEST
    };
    const successAction = {
      type: FETCH_VIDEOS_SUCCESS
    };
    const failureAction = {
      type: FETCH_VIDEOS_FAILURE,
      error: "error"
    };

    expect(isVideosError(false, requestAction)).toBe(false);
    expect(isVideosError(false, successAction)).toBe(false);
    expect(isVideosError(false, failureAction)).toBe(true);
  });

  it("selects trailer url by movieId", () => {
    const state = {
      videos: {}
    };
    const movieId = 353081;
    const videos = [
      {
        id: "5a77b31e925141775c0082c6",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "wb49-oV0F78",
        name: "Mission: Impossible - Fallout (2018) - Official Trailer - Paramount Pictures",
        site: "YouTube",
        size: 1080,
        type: "Trailer"
      },
      {
        id: "5b4f56510e0a264b8a0115a6",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "Z_aCOQi5tm4",
        name: 'Mission: Impossible-Fallout (2018)- "All Stunts"- Paramount Pictures',
        site: "YouTube",
        size: 720,
        type: "Clip"
      }
    ];

    state.videos[movieId] = videos;

    expect(getTrailerUrl(state, movieId)).toEqual("https://youtube.com/watch?v=" + videos[0].key);
  });
});
