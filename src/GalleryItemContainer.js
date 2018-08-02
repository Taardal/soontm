import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View } from "react-native";
import GalleryItem from "./GalleryItem";
import { getPosterUrl } from "./imageConfigReducer";

class GalleryItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { size, posterUrl } = this.props;
    return (
      <View>
        {posterUrl.length > 0 && <GalleryItem imageUrl={posterUrl} size={size} onClick={this.onClick} />}
      </View>
    );
  }

  onClick() {
    const { navigation, movie, posterUrl } = this.props;
    navigation.navigate("Details", {
      movie,
      posterUrl
    });
  }
}

GalleryItemContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
  posterUrl: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  posterUrl: getPosterUrl(state, ownProps.movie.poster_path, ownProps.size.width)
});

export default connect(mapStateToProps)(GalleryItemContainer);
