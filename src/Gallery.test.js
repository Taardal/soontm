import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Enzyme from "enzyme";
import Gallery from "./Gallery";

describe("Gallery", () => {
  it("matches snapshot", () => {
    const movies = [
      { id: 0, value: "movie1" },
      { id: 1, value: "movie2" },
      { id: 2, value: "movie3" },
      { id: 3, value: "movie4" }
    ];
    const shallowRenderer = new ShallowRenderer();

    shallowRenderer.render(
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
    );
    const renderOutput = shallowRenderer.getRenderOutput();

    expect(renderOutput).toMatchSnapshot();
  });

  it("renders list as grid with expected data", () => {
    const numberOfColumns = 3;
    const movies = [
      { id: 0, value: "movie1" },
      { id: 1, value: "movie2" },
      { id: 2, value: "movie3" },
      { id: 3, value: "movie4" }
    ];

    const enzyme = Enzyme.shallow(
      <Gallery
        navigation={{
          navigate: () => jest.fn()
        }}
        movies={movies}
        imageBaseUrl={"imageBaseUrl"}
        imageWidth={100}
        imageHeight={100}
        numberOfColumns={numberOfColumns}
      />
    );

    const listProps = enzyme.find("FlatList").props();
    expect(listProps.data.length).toBe(movies.length);
    expect(listProps.numColumns).toBe(numberOfColumns);
  });
});
