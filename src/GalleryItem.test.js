import React from "react";
import ReactTestRenderer from "react-test-renderer";
import GalleryItem from "./GalleryItem";

describe("GalleryItem", () => {
  it("renders", () => {
    const width = 100;
    const height = 100;
    const color = "powderblue";

    const viewTree = ReactTestRenderer.create(
      <GalleryItem color={color} width={width} height={height} />
    ).toJSON();
    
    expect(viewTree).toMatchSnapshot();
    expect(viewTree.type).toBe("View");
    expect(viewTree.props.style.width).toBe(width);
    expect(viewTree.props.style.height).toBe(height);
    expect(viewTree.props.style.backgroundColor).toBe(color);
  });
});
