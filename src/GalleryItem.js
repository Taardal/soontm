import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";

class GalleryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, width, height } = this.props;
    return (
      <View
        style={{ width: width, height: height, backgroundColor: color }}
      />
    );
  }
}

GalleryItem.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default GalleryItem;
