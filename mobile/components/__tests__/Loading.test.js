import React from "react";
import renderer from "react-test-renderer";
import Loading from "../Loading";

describe("<Loading/>", () => {
  const tree = renderer.create(<Loading />).toJSON();

  it("has 1 child", () => {
    expect(tree.children.length).toBe(1);
  });

  it("contains correct text content", () => {
    expect(tree.children[0].children[0]).toBe("Loading..");
  });
});
