import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import Gallery from "./Gallery";
import { fetchMovies } from "./moviesActions";
import { fetchImageConfig } from "./imageConfigActions";
import { fetchLanguages } from "./languagesActions";

const NUMBER_OF_COLUMNS = 3;
const IMAGE_WIDTH = Dimensions.get("window").width / NUMBER_OF_COLUMNS;
const IMAGE_HEIGHT = (IMAGE_WIDTH * 5) / 3;

class GalleryContainer extends React.Component {
  static navigationOptions = Gallery.navigationOptions;

  constructor(props) {
    super(props);
    this.onRefresh = this.onRefresh.bind(this);
  }

  render() {
    const { navigation, movies, isLoading } = this.props;
    return (
      <Gallery
        navigation={navigation}
        movies={movies}
        imageWidth={IMAGE_WIDTH}
        imageHeight={IMAGE_HEIGHT}
        numberOfColumns={NUMBER_OF_COLUMNS}
        isLoading={isLoading}
        onRefresh={this.onRefresh}
      />
    );
  }

  componentDidMount() {
    this.onRefresh();
  }

  onRefresh() {
    this.props.onFetchMovies();
    this.props.onFetchImageConfig();
    this.props.onFetchLanguages();
  }
}

GalleryContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFetchMovies: PropTypes.func.isRequired,
  onFetchImageConfig: PropTypes.func.isRequired,
  onFetchLanguages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies,
  isLoading: state.isMoviesLoading && state.isImageConfigLoading && state.isLanguagesLoading
});

const mapDispatchToProps = dispatch => ({
  onFetchMovies: () => dispatch(fetchMovies()),
  onFetchImageConfig: () => dispatch(fetchImageConfig()),
  onFetchLanguages: () => dispatch(fetchLanguages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
