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
    const { navigation, movies, isLoading, itemSize, onRefresh, numberOfColumns } = this.props;
    return (
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <GalleryItemContainer navigation={navigation} movie={item} size={itemSize} />
        )}
        keyExtractor={item => item.id}
        numColumns={numberOfColumns}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
      />
    );
  }
}

Gallery.propTypes = {
  navigation: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  itemSize: PropTypes.object.isRequired,
  onRefresh: PropTypes.func.isRequired,
  numberOfColumns: PropTypes.number.isRequired
};

export default Gallery;
