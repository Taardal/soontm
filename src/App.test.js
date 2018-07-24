import React from "react";
import ReactTestRenderer from "react-test-renderer";
import App from "./App";

jest.mock("./Gallery");

describe("App", () => {
  it("renders", () => {
    expect(ReactTestRenderer.create(<App />).toJSON()).toMatchSnapshot();
  });
});
