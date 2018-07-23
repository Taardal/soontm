import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Dimensions, View, Text, FlatList } from "react-native";
import GalleryItem from "./GalleryItem";

const numberOfColumns = 3;
const size = Dimensions.get("window").width / numberOfColumns;
const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: size
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: "lightblue"
  }
});

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList
        data={this.props.colors}
        renderItem={({ item }) => (
          <GalleryItem color={item.value} width={size} height={size} />
          
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
