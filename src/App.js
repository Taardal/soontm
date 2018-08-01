import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation";
import store from "./reduxStore";
import GalleryContainer from "./GalleryContainer";
import DetailsContainer from "./DetailsContainer";
import { styles } from "./App.styles";

const actionBarStyles = StyleSheet.flatten(styles.actionBar);

const Navigator = createStackNavigator(
  {
    Gallery: {
      screen: GalleryContainer
    },
    Details: {
      screen: DetailsContainer
    }
  },
  {
    initialRouteName: "Gallery",
    navigationOptions: {
      headerStyle: {
        backgroundColor: actionBarStyles.backgroundColor
      },
      headerTintColor: actionBarStyles.tintColor,
      headerTitleStyle: {
        fontWeight: actionBarStyles.fontWeight
      }
    }
  }
);

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={styles.statusBar.backgroundColor} />
      <Navigator />
    </View>
  </Provider>
);

export default App;
