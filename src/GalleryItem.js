import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Image } from "react-native";
import { styles } from "./GalleryItem.styles";

const GalleryItem = ({ imageUrl, width, height, onClick }) => (
  <TouchableHighlight onPress={onClick}>
    <Image
      source={{ uri: imageUrl }}
      style={[
        styles.image,
        {
          width: width,
          height: height
        }
      ]}
    />
  </TouchableHighlight>
);

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default GalleryItem;
