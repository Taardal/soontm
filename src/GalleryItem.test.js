import React from "react";
import ReactTestRenderer from "react-test-renderer";
import GalleryItem from "./GalleryItem";

describe("GalleryItem", () => {
  it("renders", () => {
    const width = 100;
    const height = 100;
    const movie = {
      id: 1,
      value: "some movie"
    };

    const viewTree = ReactTestRenderer.create(
      <GalleryItem movie={movie} width={width} height={height} />
    ).toJSON();
    
    expect(viewTree).toMatchSnapshot();
    expect(viewTree.type).toBe("View");
    expect(viewTree.props.style.width).toBe(width);
    expect(viewTree.props.style.height).toBe(height);
    
    const text = viewTree.children[0];
    expect(text.type).toBe("Text");

    const movieTitle = text.children[0];
    expect(movieTitle).toBe(movie.value);
  });
});
