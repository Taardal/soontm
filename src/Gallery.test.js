import React from "react";
import ReactTestRenderer from "react-test-renderer";
import Gallery from "./Gallery";

jest.mock("FlatList", () => "FlatList");

describe("Gallery", () => {
  it("renders expected number of items", () => {
    const movies = [
      { id: 0, value: "powderblue" },
      { id: 1, value: "skyblue" },
      { id: 2, value: "steelblue" },
      { id: 3, value: "powderblue" }
    ];

    const viewTree = ReactTestRenderer.create(
      <Gallery movies={movies} />
    ).toJSON();

    expect(viewTree).toMatchSnapshot();
    expect(viewTree.props.data.length).toBe(movies.length);
  });
});
