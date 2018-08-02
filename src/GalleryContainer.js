import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import Gallery from "./Gallery";
import { fetchMovies } from "./moviesActions";
import { fetchImageConfig } from "./imageConfigActions";
import { fetchLanguages } from "./languagesActions";
import { getDimensions } from "./dimensionsActions";
import { getGalleryItemPosterSize } from "./dimensionsReducer"

const NUMBER_OF_COLUMNS = 3;

class GalleryContainer extends React.Component {
  static navigationOptions = Gallery.navigationOptions;

  constructor(props) {
    super(props);
    this.onRefresh = this.onRefresh.bind(this);
  }

  componentWillMount() {
    this.onRefresh();
  }

  render() {
    const { navigation, movies, isLoading, itemSize } = this.props;
    return (
      <Gallery
        navigation={navigation}
        movies={movies}
        isLoading={isLoading}
        itemSize={itemSize}
        onRefresh={this.onRefresh}
        numberOfColumns={NUMBER_OF_COLUMNS}
      />
    );
  }

  onRefresh() {
    this.props.onFetchMovies();
    this.props.onFetchImageConfig();
    this.props.onFetchLanguages();
    this.props.onGetDimensions();
  }
}

GalleryContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  itemSize: PropTypes.object.isRequired,
  onFetchMovies: PropTypes.func.isRequired,
  onFetchImageConfig: PropTypes.func.isRequired,
  onFetchLanguages: PropTypes.func.isRequired,
  onGetDimensions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies,
  isLoading: state.isMoviesLoading && state.isImageConfigLoading && state.isLanguagesLoading,
  itemSize: getGalleryItemPosterSize(state, NUMBER_OF_COLUMNS)
});

const mapDispatchToProps = dispatch => ({
  onFetchMovies: () => dispatch(fetchMovies()),
  onFetchImageConfig: () => dispatch(fetchImageConfig()),
  onFetchLanguages: () => dispatch(fetchLanguages()),
  onGetDimensions: () => dispatch(getDimensions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
