import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Enzyme from "enzyme";
import Details from "./Details";

jest.mock("Text", () => "Text");

describe("Details", () => {
  it("matches snapshot", () => {
    const movie = {
      id: 1,
      title: "movie",
      release_date: "release_date",
      original_language: "en",
      overview: "overview"
    };

    const shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(<Details movie={movie} posterUrl={"posterUrl"} backdropUrl={"backdropUrl"} language={"English"} />);
    const renderOutput = shallowRenderer.getRenderOutput();

    expect(renderOutput).toMatchSnapshot();
  });
});
