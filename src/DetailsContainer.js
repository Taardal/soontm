import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Details from "./Details";
import { getBackdropUrl } from "./imageConfigReducer";
import { getLanguageName } from "./languagesReducer";
import { getDetailsPosterSize } from "./dimensionsReducer";

class DetailsContainer extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const movie = navigation.getParam("movie");
    return {
      title: movie.title
    };
  };

  render() {
    const { navigation, backdropUrl, language } = this.props;
    const movie = navigation.getParam("movie");
    const posterUrl = navigation.getParam("posterUrl");
    return <Details movie={movie} posterUrl={posterUrl} backdropUrl={backdropUrl} language={language} />;
  }
}

DetailsContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  backdropUrl: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  posterSize: getDetailsPosterSize(state),
  backdropUrl: getBackdropUrl(state, ownProps.navigation.getParam("movie").backdrop_path),
  language: getLanguageName(state, ownProps.navigation.getParam("movie").original_language),
});

export default connect(mapStateToProps)(DetailsContainer);
