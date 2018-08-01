import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import { styles } from "./Details.styles";

const WIDTH = 110;
const HEIGHT = (WIDTH * 5) / 3;

class Details extends React.Component {
  render() {
    const { movie, posterUrl, backdropUrl, language } = this.props;
    return (
      <View style={styles.container}>
        <View style={{flex: 3}}>
          <Image source={{ uri: backdropUrl }} style={styles.backdrop} />
          <View style={styles.header} />
          <View style={[styles.headerOverlay, { height: HEIGHT }]}>
          <Image
            source={{ uri: posterUrl }}
            style={[
              styles.poster,
              {
                width: WIDTH,
                height: HEIGHT,
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
}

Details.propTypes = {
  movie: PropTypes.object.isRequired,
  posterUrl: PropTypes.string.isRequired,
  backdropUrl: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}

export default Details;
