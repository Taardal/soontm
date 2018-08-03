import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Enzyme from "enzyme";
import Details from "./Details";

jest.mock("Text", () => "Text");
jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");

describe("Details", () => {
  it("matches snapshot", () => {
    const movie = {
      id: 1,
      title: "movie",
      release_date: "release_date",
      original_language: "en",
      overview: "overview"
    };
    const posterSize = {
      width: 100,
      height: 100
    };

    const shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(
      <Details
        movie={movie}
        posterSize={posterSize}
        posterUrl={"posterUrl"}
        backdropUrl={"backdropUrl"}
        trailerUrl={"trailerUrl"}
        language={"English"}
        onPlayTrailer={jest.fn()}
      />
    );
    const renderOutput = shallowRenderer.getRenderOutput();

    expect(renderOutput).toMatchSnapshot();
  });
});
