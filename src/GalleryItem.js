import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Image } from "react-native";
import { styles } from "./GalleryItem.styles";

const GalleryItem = ({ imageUrl, size, onClick }) => (
  <TouchableHighlight onPress={onClick}>
    <Image
      source={{ uri: imageUrl }}
      style={[
        styles.image,
        {
          width: size.width,
          height: size.height
        }
      ]}
    />
  </TouchableHighlight>
);

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default GalleryItem;
