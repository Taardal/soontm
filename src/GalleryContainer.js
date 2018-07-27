import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import Gallery from "./Gallery";
import { fetchMovies } from "./movieActions";
import { fetchImageConfig } from "./imageConfigActions";

const NUMBER_OF_COLUMNS = 3;
const IMAGE_WIDTH = Dimensions.get("window").width / NUMBER_OF_COLUMNS;
const IMAGE_HEIGHT = (IMAGE_WIDTH * 5) / 3;

class GalleryContainer extends React.Component {
  render() {
    const { movies, imageBaseUrl } = this.props;
    return (
      <Gallery
        movies={movies}
        imageBaseUrl={imageBaseUrl}
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
  imageBaseUrl: PropTypes.string.isRequired,
  onFetchMovies: PropTypes.func.isRequired,
  onFetchImageConfig: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
  imageBaseUrl: state.imageBaseUrl,
});

const mapDispatchToProps = dispatch => ({
  onFetchMovies: () => dispatch(fetchMovies()),
  onFetchImageConfig: () => dispatch(fetchImageConfig(IMAGE_WIDTH))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
