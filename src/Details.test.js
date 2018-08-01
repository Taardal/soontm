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
      original_language: "original_language",
      overview: "overview"
    };
    const navigation = {
      getParam: name => {
        if (name === "movie") {
          return movie;
        } else if (name === "posterUrl") {
          return "posterUrl";
        } else if (name === "backdropUrl") {
          return "backdropUrl";
        }
      }
    };

    const shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(<Details navigation={navigation} />);
    const renderOutput = shallowRenderer.getRenderOutput();

    expect(renderOutput).toMatchSnapshot();
  });
});
