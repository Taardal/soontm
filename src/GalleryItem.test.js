import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Enzyme from "enzyme";
import GalleryItem from "./GalleryItem";

describe("GalleryItem", () => {
  it("matches snapshot", () => {
    const shallowRenderer = new ShallowRenderer();
    const size = {
      width: 100,
      height: 100
    };

    shallowRenderer.render(<GalleryItem imageUrl={"imageUrl"} size={size} onClick={jest.fn()} />);
    const renderOutput = shallowRenderer.getRenderOutput();

    expect(renderOutput).toMatchSnapshot();
  });

  it("renders image with expected props", () => {
    const imageUrl = "imageUrl";
    const size = {
      width: 100,
      height: 100
    };

    const enzyme = Enzyme.shallow(<GalleryItem imageUrl={imageUrl} size={size} onClick={jest.fn()} />);

    const image = enzyme.find("Image");
    expect(image).toBeTruthy();
    expect(image.props().source.uri).toBe(imageUrl);

    const stylesUsingStyleSheet = image.props().style[0];
    const stylesUsingProps = image.props().style[1];
    expect(stylesUsingProps.width).toBe(size.width);
    expect(stylesUsingProps.height).toBe(size.height);
  });

  it("calls callback on press", () => {
    const onClick = jest.fn();
    const size = {
      width: 100,
      height: 100
    };

    const enzyme = Enzyme.shallow(<GalleryItem imageUrl={"imageUrl"} size={size} onClick={onClick} />);

    enzyme.find("TouchableHighlight").simulate("press");
    expect(onClick.mock.calls.length).toBe(1);
  });
});
