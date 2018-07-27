import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import Gallery from "./Gallery";
import { fetchMovies } from "./movieActions";
import { fetchTmdbConfig } from "./tmdbConfigActions";
import { getPosterBaseUrl } from "./tmdbConfigReducer";

const numberOfColumns = 3;
const itemWidth = Dimensions.get("window").width / numberOfColumns;
const itemHeight = (itemWidth * 5) / 3;

class GalleryContainer extends React.Component {
  render() {
    const { movies, posterBaseUrl } = this.props;
    return (
      <Gallery
        movies={movies}
        posterBaseUrl={posterBaseUrl}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        numberOfColumns={numberOfColumns}
      />
    );
  }

  componentDidMount() {
    this.props.onFetchMovies();
    this.props.onFetchTmdbConfig();
  }
}

GalleryContainer.propTypes = {
  posterBaseUrl: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFetchMovies: PropTypes.func.isRequired,
  onFetchTmdbConfig: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
  posterBaseUrl: getPosterBaseUrl(itemWidth, state),
});

const mapDispatchToProps = dispatch => ({
  onFetchMovies: () => dispatch(fetchMovies()),
  onFetchTmdbConfig: () => dispatch(fetchTmdbConfig())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
