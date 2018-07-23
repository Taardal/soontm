import React from "react";
import { View } from "react-native";
import Enzyme from "enzyme";
import GalleryItem from "./GalleryItem";

describe("GalleryItem", () => {
  it("renders", () => {
    const enzyme = Enzyme.shallow(
      <GalleryItem
        color={"powderblue"}
        width={100}
        height={100}
      />
    );
    expect(enzyme.find(View).length).toBe(1);
  });
});
