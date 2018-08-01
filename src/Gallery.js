import React from "react";
import PropTypes from "prop-types";
import { FlatList, View, ActivityIndicator, StyleSheet, RefreshControl } from "react-native";
import GalleryItemContainer from "./GalleryItemContainer";

class Gallery extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: "Upcoming"
    };
  };

  render() {
    const { navigation, movies, imageWidth, imageHeight, numberOfColumns, isLoading, onRefresh } = this.props;
    return (
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <GalleryItemContainer
            navigation={navigation}
            movie={item}
            width={imageWidth}
            height={imageHeight}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={numberOfColumns}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

Gallery.propTypes = {
  navigation: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  numberOfColumns: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired
};

export default Gallery;
