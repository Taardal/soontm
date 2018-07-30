import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";

const width = 110;
const height = (width * 5) / 3;

class Details extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const movie = navigation.getParam("movie");
    return {
      title: movie.title
    };
  };

  render() {
    const { navigation } = this.props;
    const movie = navigation.getParam("movie");
    const posterUrl = navigation.getParam("posterUrl");
    const backdropUrl = navigation.getParam("backdropUrl");
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: backdropUrl }}
          style={{
            flex: 2
          }}
        />
        <View style={{ flex: 1, backgroundColor: "#212121" }} />
        <View style={{ flex: 3 }}>
          <View style={{ marginTop: 35, marginLeft: 25, marginRight: 25, marginBottom: 35 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Overview</Text>
            <Text style={{}}>{movie.overview}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            height: height,
            position: "absolute",
            top: 100,
            left: 25,
            right: 25
          }}
        >
          <Image
            source={{ uri: posterUrl }}
            style={{
              flex: 1,
              width: width,
              height: height,
              resizeMode: "cover"
            }}
          />
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end"
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>{movie.title}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "white" }}>{movie.release_date}</Text>
                <Text style={{ color: "white", marginLeft: 10 }}>{movie.original_language}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Details;
