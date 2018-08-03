import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerAndBackdropContainer: {
    flex: 1
  },
  backdrop: {
    flex: 2
  },
  backdropTouchableContainer: {
    flex: 1
  },
  backdropPlay: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  headerBackground: {
    flex: 1,
    backgroundColor: "#212121"
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
  headerOverylayTextContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flex: 2
  },
  headerOverylayText: {
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
  },
  overviewContainer: {
    flex: 1
  },
  overviewTextContainer: {
    marginTop: 35,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 35
  },
  overviewTitleText: {
    fontWeight: "bold",
    marginBottom: 10
  }
});
