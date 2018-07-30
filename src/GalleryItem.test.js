import React from "react";
import ReactTestRenderer from "react-test-renderer";
import GalleryItem from "./GalleryItem";

jest.mock("TouchableHighlight", () => "TouchableHighlight");
jest.mock("Image", () => "Image");

describe("GalleryItem", () => {
  it("renders", () => {
    const width = 100;
    const height = 100;
    const imageUrl = "image/api/url";

    const viewTree = ReactTestRenderer.create(
      <GalleryItem imageUrl={imageUrl} width={width} height={height} />
    ).toJSON();
    
    expect(viewTree).toMatchSnapshot();
    
    const touchableHighlight = viewTree;
    expect(viewTree.type).toBe("TouchableHighlight");

    const image = touchableHighlight.children[0];
    expect(image.type).toBe("Image");
    expect(image.props.source.uri).toBe(imageUrl);
    expect(image.props.style.width).toBe(width);
    expect(image.props.style.height).toBe(height);
  });
});
