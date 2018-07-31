import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "./App";

jest.mock("./reduxStore");
jest.mock("react-navigation", () => {
  return {
    createStackNavigator: () => "Navigator"
  };
});

describe("App", () => {
  it("matches snapshot", () => {
    const shallowRenderer = new ShallowRenderer();

    shallowRenderer.render(<App />);
    const renderOutput = shallowRenderer.getRenderOutput();

    expect(renderOutput).toMatchSnapshot();
  });
});
