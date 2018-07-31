import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Enzyme from "enzyme";
import GalleryItem from "./GalleryItem";

describe("GalleryItem", () => {
  it("matches snapshot", () => {
    const shallowRenderer = new ShallowRenderer();

    shallowRenderer.render(
      <GalleryItem imageUrl={"imageUrl"} width={100} height={100} onClick={jest.fn()} />
    );
    const renderOutput = shallowRenderer.getRenderOutput();

    expect(renderOutput).toMatchSnapshot();
  });

  it("renders image with expected props", () => {
    const imageUrl = "imageUrl";
    const width = 100;
    const height = 100;

    const enzyme = Enzyme.shallow(
      <GalleryItem imageUrl={imageUrl} width={width} height={height} onClick={jest.fn()} />
    );

    const image = enzyme.find("Image");
    expect(image).toBeTruthy();
    expect(image.props().source.uri).toBe(imageUrl);

    const stylesUsingStyleSheet = image.props().style[0];
    const stylesUsingProps = image.props().style[1];
    expect(stylesUsingProps.width).toBe(width);
    expect(stylesUsingProps.height).toBe(height);
  });

  it("calls callback on press", () => {
    const onClick = jest.fn();
    
    const enzyme = Enzyme.shallow(<GalleryItem imageUrl={"imageUrl"} width={100} height={100} onClick={onClick} />);
    
    enzyme.find("TouchableHighlight").simulate("press");
    expect(onClick.mock.calls.length).toBe(1);
  });
});
