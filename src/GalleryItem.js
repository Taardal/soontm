import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Image } from "react-native";

const GalleryItem = ({ imageUrl, width, height, onClick }) => (
  <TouchableHighlight onPress={onClick}>
    <Image
      source={{ uri: imageUrl }}
      style={{
        width: width,
        height: height,
        margin: 1,
        resizeMode: "cover"
      }}
    />
  </TouchableHighlight>
);

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryItem;
