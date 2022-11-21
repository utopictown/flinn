import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import CircleAlp from "../CircleAlp";

describe("<CircleAlp/>", () => {
  const tree = renderer
    .create(
      <CircleAlp>
        <Text>Circling</Text>
      </CircleAlp>
    )
    .toJSON();

  it("has 1 child", () => {
    expect(tree.children.length).toBe(1);
  });

  it("contains correct text content", () => {
    expect(tree.children[0].children[0]).toBe("Circling");
  });
});
