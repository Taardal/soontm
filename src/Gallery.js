import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import GalleryItem from "./GalleryItem";

const Gallery = ({ movies, imageBaseUrl, imageWidth, imageHeight, numberOfColumns }) => (
  <FlatList
    data={movies}
    renderItem={({ item }) => (
      <GalleryItem movie={item} width={imageWidth} height={imageHeight} imageBaseUrl={imageBaseUrl} />
    )}
    keyExtractor={item => item.id}
    numColumns={3}
  />
);

Gallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  numberOfColumns: PropTypes.number.isRequired
};

export default Gallery;
