import { movies, isMoviesLoading, isMoviesError } from "./moviesReducer";

describe("movies", () => {
  it("returns unmodified state by default", () => {
    const state = [
      {
        id: 1,
        value: "Foo"
      }
    ];
    expect(movies(state, {})).toBe(state);
  });
});
