import React from "react";
import PropTypes from "prop-types";
import { FlatList, Dimensions } from "react-native";
import GalleryItem from "./GalleryItem";

const numberOfColumns = 3;
const itemSize = Dimensions.get("window").width / numberOfColumns;

class Gallery extends React.Component {
  render() {
    const { colors } = this.props;
    return (
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <GalleryItem color={item.value} width={itemSize} height={itemSize} />
        )}
        keyExtractor={item => item.id}
        numColumns={numberOfColumns}
      />
    );
  }
}

Gallery.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Gallery;
