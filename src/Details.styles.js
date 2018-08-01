import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topHalfContainer: {
    flex: 3
  },
  backdrop: {
    flex: 2
  },
  header: {
    flex: 1,
    backgroundColor: "#212121"
  },
  overview: {
    flex: 3
  },
  overviewText: {
    marginTop: 35,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 35
  },
  overviewTitleText: {
    fontWeight: "bold",
    marginBottom: 10
  },
  headerOverlay: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    left: 25,
    right: 25
  },
  poster: {
    flex: 1,
    resizeMode: "cover"
  },
  infoFrame: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flex: 2
  },
  infoText: {
    marginLeft: 10
  },
  title: {
    color: "white",
    fontWeight: "bold"
  },
  subtitleText: {
    flexDirection: "row"
  },
  releaseDate: {
    color: "white"
  },
  language: {
    color: "white",
    marginLeft: 10
  }
});
