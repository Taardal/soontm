import moviesReducer from "./moviesReducer";

describe("moviesReducer", () => {
  it("returns unmodified state by default", () => {
    const movies = [
      {
        id: 1,
        value: "Foo"
      }
    ];
    expect(moviesReducer(movies, {})).toBe(movies);
  });
});
