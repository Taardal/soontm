import React from "react";
import ReactTestRenderer from "react-test-renderer";
import App from "./App";

jest.mock("View", () => "View");
jest.mock("StatusBar", () => "StatusBar");
jest.mock("react-navigation", () => {
  const RealComponent = require.requireActual("react-navigation");
  const React = require("React");
  class Navigator extends React.Component {
    render() {
      return React.createElement("Navigator", this.props, this.props.children);
    }
  }
  Navigator.propTypes = RealComponent.propTypes;
  return {
    createStackNavigator: () => Navigator
  };
});
jest.mock("./GalleryContainer", () => "GalleryContainer");
jest.mock("./Details", () => "Details");
jest.mock("./App.styles", () => ({
  styles: {
    container: {
      flex: 1
    },
    statusBar: {
      backgroundColor: "black"
    },
    actionBar: {
      backgroundColor: "#212121",
      tintColor: "#fff",
      fontWeight: "bold"
    }
  }
}));

describe("App", () => {
  it("renders", () => {
    const viewTree = ReactTestRenderer.create(<App />).toJSON();
    console.log(viewTree);

    expect(viewTree).toMatchSnapshot();
    expect(viewTree.type).toBe("View");
    expect(viewTree.children.length).toBe(2);
    expect(viewTree.children[0].type).toBe("StatusBar");
    expect(viewTree.children[1].type).toBe("Navigator");
  });
});
