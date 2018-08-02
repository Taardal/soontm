import { Dimensions } from "react-native";
import { GET_DIMENSIONS } from "./actionTypes";
import { dimensions, getGalleryItemPosterSize, getDetailsPosterSize } from "./dimensionsReducer";

jest.mock("Dimensions", () => {
  class Dimensions {
    static get = name => {
      return {
        width: 100,
        height: 100
      };
    };
  }
  return Dimensions;
});

describe("dimensionsReducer", () => {
  it("updates state on find action", () => {
    const initialState = {};
    const action = {
      type: GET_DIMENSIONS
    };
    expect(dimensions(initialState, action)).toEqual({
      width: 100,
      height: 100
    });
  });

  it("selects gallery item poster size", () => {
    const state = {
      dimensions: {
        width: 1920,
        height: 1080
      }
    };
    const numberOfColumns = 3;

    const expectedWidth = state.dimensions.width / numberOfColumns;
    const expectedHeight = (expectedWidth * 5) / 3;
    expect(getGalleryItemPosterSize(state, numberOfColumns)).toEqual({
      width: expectedWidth,
      height: expectedHeight
    });
  });

  it("selects details poster size", () => {
    const state = {};
    const expectedWidth = 110;
    const expectedHeight = (expectedWidth * 5) / 3;
    expect(getDetailsPosterSize(state)).toEqual({
      width: expectedWidth,
      height: expectedHeight
    });
  })
});
