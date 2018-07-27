import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

class GalleryItem extends React.Component {
  render() {
    const { movie, posterBaseUrl, width, height } = this.props;
    return (
      <Image
        source={{ uri: posterBaseUrl + movie.poster_path }}
        style={{
          width: width,
          height: height,
          margin: 1,
          resizeMode: "cover",
        }}
      />
    );
  }
}

GalleryItem.propTypes = {
  movie: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  posterBaseUrl: PropTypes.string.isRequired,
};

export default GalleryItem;
