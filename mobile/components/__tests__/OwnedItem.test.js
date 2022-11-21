import React from "react";
import renderer from "react-test-renderer";
import OwnedItem from "../OwnedItem";

describe("<OwnedItem/>", () => {
  const tree = renderer.create(<OwnedItem data={{ name: "A", dob: "2020-01-01" }} />).toJSON();
  it("has 2 child", () => {
    expect(tree.children.length).toBe(2);
  });
});
