import { Dimensions } from "react-native";
import { GET_DIMENSIONS } from "./actionTypes";

export const dimensions = (state = {}, action) => {
  switch (action.type) {
    case GET_DIMENSIONS:
      return Dimensions.get("window");
    default:
      return state;
  }
};

export const getGalleryItemPosterSize = (state, numberOfColumns) => {
  const width = state.dimensions.width / numberOfColumns;
  const height = getPosterHeight(width);
  return {
    width,
    height
  };
};

export const getDetailsPosterSize = state => {
  const width = 110;
  const height = getPosterHeight(width);
  return {
    width,
    height
  };
};

const getPosterHeight = posterWidth => (posterWidth * 5) / 3;
