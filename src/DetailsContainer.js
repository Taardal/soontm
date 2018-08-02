import React from "react";
import PropTypes from "prop-types";
import { Linking } from "react-native";
import { connect } from "react-redux";
import Details from "./Details";
import { fetchVideos } from "./videosActions";
import { getBackdropUrl } from "./imageConfigReducer";
import { getLanguageName } from "./languagesReducer";
import { getDetailsPosterSize } from "./dimensionsReducer";
import { getTrailerUrl } from "./videosReducer";

class DetailsContainer extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const movie = navigation.getParam("movie");
    return {
      title: movie.title
    };
  };

  constructor(props) {
    super(props)
    this.onPlayTrailer = this.onPlayTrailer.bind(this);
  }

  render() {
    const { navigation, posterSize, backdropUrl, language, trailerUrl } = this.props;
    const movie = navigation.getParam("movie");
    const posterUrl = navigation.getParam("posterUrl");
    return (
      <Details
        movie={movie}
        posterUrl={posterUrl}
        posterSize={posterSize}
        backdropUrl={backdropUrl}
        language={language}
        onPlayTrailer={this.onPlayTrailer}
        trailerUrl={trailerUrl}
      />
    );
  }

  componentDidMount() {
    const { navigation, onFetchVideos } = this.props;
    onFetchVideos(navigation.getParam("movie").id);
  }

  onPlayTrailer() {
    Linking.openURL(this.props.trailerUrl);
  }
}

DetailsContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  backdropUrl: PropTypes.string.isRequired,
  trailerUrl: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  posterSize: getDetailsPosterSize(state),
  backdropUrl: getBackdropUrl(state, ownProps.navigation.getParam("movie").backdrop_path),
  language: getLanguageName(state, ownProps.navigation.getParam("movie").original_language),
  trailerUrl: getTrailerUrl(state, ownProps.navigation.getParam("movie").id)
});

const mapDispatchToProps = dispatch => ({
  onFetchVideos: movieId => dispatch(fetchVideos(movieId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsContainer);
