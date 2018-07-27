import React from "react";
import ReactTestRenderer from "react-test-renderer";
import GalleryItem from "./GalleryItem";

jest.mock("Image", () => "Image");

describe("GalleryItem", () => {
  it("renders", () => {
    const width = 100;
    const height = 100;
    const imageBaseUrl = "imageBaseUrl";
    const movie = {
      id: 1,
      title: "Gladiator",
      poster_path: "/poster/path"
    };

    const viewTree = ReactTestRenderer.create(
      <GalleryItem movie={movie} imageBaseUrl={imageBaseUrl} width={width} height={height} />
    ).toJSON();
    console.log(viewTree);
    
    expect(viewTree).toMatchSnapshot();
    expect(viewTree.type).toBe("Image");
    expect(viewTree.props.source.uri).toBe(imageBaseUrl + movie.poster_path);
    expect(viewTree.props.style.width).toBe(width);
    expect(viewTree.props.style.height).toBe(height);
  });
});
