import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Gallery from "./Gallery";
import { fetchMovies } from "./movieActions";

class GalleryContainer extends React.Component {
  render() {
    return (
      <Gallery movies={this.props.movies} />
    )
  }

  componentDidMount() {
    this.props.onFetchMovies();
  }
}

GalleryContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFetchMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  onFetchMovies: () => dispatch(fetchMovies())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
