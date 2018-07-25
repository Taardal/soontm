import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Provider } from "react-redux";
import store from "./reduxStore";
import GalleryContainer from "./GalleryContainer";

const App = () => (
  <Provider store={store}>
    <GalleryContainer />
  </Provider>
);

export default App;
