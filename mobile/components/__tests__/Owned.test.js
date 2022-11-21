import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import CircleAlp from "../CircleAlp";
import Owned from "../Owned";

describe("<Owned/>", () => {
  const tree = renderer.create(<Owned data={[{ name: "A", dob: "2020-01-01" }]} />).toJSON();

  it("has 2 child", () => {
    expect(tree.children.length).toBe(2);
  });
});
