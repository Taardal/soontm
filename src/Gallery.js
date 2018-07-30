import React from "react";
import PropTypes from "prop-types";
import { View, FlatList } from "react-native";
import GalleryItemContainer from "./GalleryItemContainer";

class Gallery extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: "Upcoming",
    }
  }
  render() {
    const { navigation, movies, imageWidth, imageHeight, numberOfColumns } = this.props;
    return (
      <View>
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
        />
      </View>
    );
  }
}

Gallery.propTypes = {
  navigation: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  numberOfColumns: PropTypes.number.isRequired
};

export default Gallery;
