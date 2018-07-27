import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import GalleryItem from "./GalleryItem";

class Gallery extends React.Component {
  render() {
    const { movies, posterBaseUrl, itemWidth, itemHeight, numberOfColumns } = this.props;
    return (
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <GalleryItem
            movie={item}
            width={itemWidth}
            height={itemHeight}
            posterBaseUrl={posterBaseUrl}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    );
  }
}

Gallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  posterBaseUrl: PropTypes.string.isRequired,
  itemWidth: PropTypes.number.isRequired,
  itemHeight: PropTypes.number.isRequired,
  numberOfColumns: PropTypes.number.isRequired
};

export default Gallery;
