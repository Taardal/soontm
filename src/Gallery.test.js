import React from "react";
import ReactTestRenderer from "react-test-renderer";
import Gallery from "./Gallery";

jest.mock("FlatList", () => "FlatList");
jest.mock("./GalleryItemContainer", () => "View");

describe("Gallery", () => {
  it("renders expected number of items", () => {
    const movies = [
      { id: 0, value: "movie1" },
      { id: 1, value: "movie2" },
      { id: 2, value: "movie3" },
      { id: 3, value: "movie4" }
    ];

    const viewTree = ReactTestRenderer.create(
      <Gallery
        navigation={{
          navigate: () => jest.fn()
        }}
        movies={movies}
        imageBaseUrl={"imageBaseUrl"}
        imageWidth={100}
        imageHeight={100}
        numberOfColumns={3}
      />
    ).toJSON();
    console.log(viewTree);

    expect(viewTree).toMatchSnapshot();
    expect(viewTree.type).toBe("FlatList");
    expect(viewTree.props.data.length).toBe(movies.length);
  });
});
