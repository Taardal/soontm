import React from "react";
import ReactTestRenderer from "react-test-renderer";
import GalleryItem from "./GalleryItem";

jest.mock("TouchableHighlight", () => "TouchableHighlight");
jest.mock("Image", () => "Image");
jest.mock("./GalleryItem.styles", () => ({
  styles: {}
}));

describe("GalleryItem", () => {
  it("renders", () => {
    const width = 100;
    const height = 100;
    const imageUrl = "image/api/url";

    const viewTree = ReactTestRenderer.create(
      <GalleryItem imageUrl={imageUrl} width={width} height={height} onClick={jest.fn()} />
    ).toJSON();
    console.log(viewTree);

    expect(viewTree).toMatchSnapshot();
    expect(viewTree.type).toBe("TouchableHighlight");
    expect(viewTree.children.length).toBe(1);

    const image = viewTree.children[0];
    expect(image.type).toBe("Image");
    expect(image.props.source.uri).toBe(imageUrl);
    expect(image.props.style.length).toBe(2);

    const styleUsingProps = image.props.style[1];
    expect(image.props.style[1].width).toBe(width);
    expect(image.props.style[1].height).toBe(height);
  });
});
