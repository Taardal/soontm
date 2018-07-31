import React from "react";
import { StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation";
import store from "./reduxStore";
import GalleryContainer from "./GalleryContainer";
import Details from "./Details";
import { styles } from "./App.styles";

const Navigator = createStackNavigator(
  {
    Gallery: {
      screen: GalleryContainer
    },
    Details: {
      screen: Details
    }
  },
  {
    initialRouteName: "Gallery",
    navigationOptions: {
      headerStyle: {
        backgroundColor: styles.actionBar.backgroundColor
      },
      headerTintColor: styles.actionBar.tintColor,
      headerTitleStyle: {
        fontWeight: styles.actionBar.fontWeight
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
