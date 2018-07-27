import { tmdbConfig, isTmdbConfigLoading, isTmdbConfigError } from "./tmdbConfigReducer";

describe("tmdbConfigReducer", () => {
  it("returns unmodified state by default", () => {
    const state = {
      images: {
        base_url: "base_url"
      }
    };
    expect(tmdbConfig(state, {})).toBe(state);
  });
})