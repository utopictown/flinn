import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import ItemLayout from "../ItemLayout";
import SectionTitle from "../SectionTitle";

describe("<SectionTitle/>", () => {
  const tree = renderer
    .create(
      <SectionTitle>
        <Text>Section Title</Text>
      </SectionTitle>
    )
    .toJSON();

  it("has 1 child", () => {
    expect(tree.children.length).toBe(1);
  });

  it("contains correct text content", () => {
    expect(tree.children[0].children[0]).toBe("Section Title");
  });
});
