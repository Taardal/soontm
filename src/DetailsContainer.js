import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Details from "./Details";
import { getLanguageName } from "./languagesReducer";

class DetailsContainer extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const movie = navigation.getParam("movie");
    return {
      title: movie.title
    };
  };

  render() {
    const { navigation, language } = this.props;
    const movie = navigation.getParam("movie");
    const posterUrl = navigation.getParam("posterUrl");
    const backdropUrl = navigation.getParam("backdropUrl");
    return <Details movie={movie} posterUrl={posterUrl} backdropUrl={backdropUrl} language={language} />;
  }
}

DetailsContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  language: getLanguageName(state, ownProps.navigation.getParam("movie").original_language)
});

export default connect(mapStateToProps)(DetailsContainer);
