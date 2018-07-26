import configurationReducer from "./configurationReducer";

describe("configurationReducer", () => {
  it("returns unmodified state by default", () => {
    const state = {
      images: {
        base_url: "base_url"
      }
    };
    expect(configurationReducer(state, {})).toBe(state);
  });
})