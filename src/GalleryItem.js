import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

const GalleryItem = ({ movie, imageBaseUrl, width, height }) => (
  <Image
    source={{ uri: imageBaseUrl + movie.poster_path }}
    style={{
      width: width,
      height: height,
      margin: 1,
      resizeMode: "cover"
    }}
  />
);

GalleryItem.propTypes = {
  movie: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  imageBaseUrl: PropTypes.string.isRequired
};

export default GalleryItem;
