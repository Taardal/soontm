import React from "react";
import { View } from "react-native";
import Enzyme from "enzyme";
import Gallery from "./Gallery";
import GalleryItem from "./GalleryItem";

describe("Gallery", () => {
  it("renders", () => {
    const colors = [
      { id: 0, value: "powderblue" },
      { id: 1, value: "skyblue" },
      { id: 2, value: "steelblue" },
      { id: 3, value: "powderblue" }
    ];
    const enzyme = Enzyme.shallow(<Gallery colors={colors} />);
    expect(enzyme.find(GalleryItem).length).toBe(colors.length);
  });
});
