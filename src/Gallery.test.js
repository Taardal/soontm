import React from "react";
import ReactTestRenderer from "react-test-renderer";
import Gallery from "./Gallery";

jest.mock("StatusBar", () => "StatusBar");
jest.mock("FlatList", () => "FlatList");

describe("Gallery", () => {
  it("renders expected number of items", () => {
    const movies = [
      { id: 0, value: "movie1" },
      { id: 1, value: "movie2" },
      { id: 2, value: "movie3" },
      { id: 3, value: "movie4" }
    ];

    const viewTree = ReactTestRenderer.create(
      <Gallery movies={movies} imageBaseUrl={"imageBaseUrl"} imageWidth={100} imageHeight={100} numberOfColumns={3} />
    ).toJSON();

    expect(viewTree).toMatchSnapshot();
    expect(viewTree.type).toBe("View");
    expect(viewTree.children[0].type).toBe("StatusBar");
    expect(viewTree.children[1].type).toBe("FlatList");
    expect(viewTree.children[1].props.data.length).toBe(movies.length);
  });
});
