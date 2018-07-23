import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Gallery from "./Gallery";

const App = () => (
  <Gallery
    colors={[
      { id: 1, value: "powderblue" },
      { id: 2, value: "skyblue" },
      { id: 3, value: "steelblue" },
      { id: 4, value: "skyblue" },
      { id: 5, value: "steelblue" },
      { id: 6, value: "powderblue" },
      { id: 7, value: "steelblue" },
      { id: 6, value: "powderblue" }
    ]}
  />
);

export default App;
