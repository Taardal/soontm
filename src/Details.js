import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableHighlight, Linking } from "react-native";
import { styles } from "./Details.styles";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.getBackdrop = this.getBackdrop.bind(this);
  }
  render() {
    const { movie, posterSize, posterUrl, backdropUrl, language, onPlayTrailer, trailerUrl } = this.props;
    const backdrop = this.getBackdrop();
    return (
      <View style={styles.container}>
        <View style={{ flex: 3 }}>
          {backdrop}
          <View style={styles.header} />
          <View style={[styles.headerOverlay, { height: posterSize.height }]}>
            <Image
              source={{ uri: posterUrl }}
              style={[
                styles.poster,
                {
                  width: posterSize.width,
                  height: posterSize.height
                }
              ]}
            />
            <View style={styles.infoFrame}>
              <View style={styles.infoText}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={styles.subtitleText}>
                  <Text style={styles.releaseDate}>{movie.release_date}</Text>
                  <Text style={styles.language}>{language}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.overview}>
          <View style={styles.overviewText}>
            <Text style={styles.overviewTitleText}>Overview</Text>
            <Text>{movie.overview}</Text>
          </View>
        </View>
      </View>
    );
  }

  getBackdrop() {
    const { backdropUrl, onPlayTrailer, trailerUrl } = this.props;
    const backdropImage = <Image source={{ uri: backdropUrl }} style={styles.backdrop} />;
    if (trailerUrl.length > 0) {
      return (
        <TouchableHighlight style={{ flex: 2 }} onPress={onPlayTrailer}>
          {backdropImage}
        </TouchableHighlight>
      );
    } else {
      return backdropImage;
    }
  }
}

Details.propTypes = {
  movie: PropTypes.object.isRequired,
  posterUrl: PropTypes.string.isRequired,
  backdropUrl: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  trailerUrl: PropTypes.string.isRequired,
  onPlayTrailer: PropTypes.func.isRequired
};

export default Details;
