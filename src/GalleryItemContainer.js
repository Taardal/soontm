import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GalleryItem from "./GalleryItem";

class GalleryItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { movie, imageBaseUrl, width, height } = this.props;
    return (
      <GalleryItem
        imageUrl={imageBaseUrl + movie.poster_path}
        width={width}
        height={height}
        onClick={this.onClick}
      />
    );
  }

  onClick() {
    const { navigation, movie, imageBaseUrl } = this.props;
    navigation.navigate("Details", {
      movie,
      posterUrl: imageBaseUrl + movie.poster_path,
      backdropUrl: "https://image.tmdb.org/t/p/w300" + movie.backdrop_path,
    });
  }
}

GalleryItemContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  imageBaseUrl: state.imageBaseUrl
});

export default connect(mapStateToProps)(GalleryItemContainer);
