import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

class GalleryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie, width, height } = this.props;
    return (
      <View
        style={{ width: width, height: height, backgroundColor: "skyblue", margin: 1 }}
      >
        <Text>{movie.title}</Text>
      </View>
    );
  }
}

GalleryItem.propTypes = {
  movie: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default GalleryItem;
