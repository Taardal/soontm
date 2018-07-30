import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import Gallery from "./Gallery";
import { fetchMovies } from "./moviesActions";
import { fetchImageConfig } from "./imageConfigActions";

const NUMBER_OF_COLUMNS = 3;
const IMAGE_WIDTH = Dimensions.get("window").width / NUMBER_OF_COLUMNS;
const IMAGE_HEIGHT = (IMAGE_WIDTH * 5) / 3;

class GalleryContainer extends React.Component {
  static navigationOptions = Gallery.navigationOptions;

  render() {
    const { navigation, movies } = this.props;
    return (
      <Gallery
        navigation={navigation}
        movies={movies}
        imageWidth={IMAGE_WIDTH}
        imageHeight={IMAGE_HEIGHT}
        numberOfColumns={NUMBER_OF_COLUMNS}
      />
    );
  }

  componentDidMount() {
    this.props.onFetchMovies();
    this.props.onFetchImageConfig();
  }
}

GalleryContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFetchMovies: PropTypes.func.isRequired,
  onFetchImageConfig: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  onFetchMovies: () => dispatch(fetchMovies()),
  onFetchImageConfig: () => dispatch(fetchImageConfig(IMAGE_WIDTH))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
