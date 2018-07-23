import React from "react";
import { View, Text } from "react-native";
import Enzyme from "enzyme";
import App from "./App";
import Gallery from "./Gallery";

describe("App", () => {
  it("renders", () => {
    const enzyme = Enzyme.shallow(<App />);
    expect(enzyme.find(Gallery).length).toBe(1);
  });
});
