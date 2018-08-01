import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View } from "react-native";
import GalleryItem from "./GalleryItem";
import { getPosterUrl, getBackdropUrl } from "./imageConfigReducer";

class GalleryItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { movie, width, height, posterUrl } = this.props;
    return (
      <View>
        {posterUrl.length > 0 && (
          <GalleryItem imageUrl={posterUrl} width={width} height={height} onClick={this.onClick} />
        )}
      </View>
    );
  }

  onClick() {
    const { navigation, movie, posterUrl, backdropUrl } = this.props;
    navigation.navigate("Details", {
      movie,
      posterUrl,
      backdropUrl
    });
  }
}

GalleryItemContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  posterUrl: PropTypes.string,
  backdropUrl: PropTypes.string
};

GalleryItemContainer.defaultProps = {
  posterUrl: "",
  backdropUrl: ""
};

const mapStateToProps = (state, ownProps) => ({
  posterUrl: getPosterUrl(state, ownProps.movie.poster_path, ownProps.width),
  backdropUrl: getBackdropUrl(state, ownProps.movie.backdrop_path, 300)
});

export default connect(mapStateToProps)(GalleryItemContainer);
