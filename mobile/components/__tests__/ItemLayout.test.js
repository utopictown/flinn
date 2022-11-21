import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import ItemLayout from "../ItemLayout";

describe("<ItemLayout/>", () => {
  const tree = renderer
    .create(
      <ItemLayout>
        <Text>Item</Text>
      </ItemLayout>
    )
    .toJSON();

  it("has 1 child", () => {
    expect(tree.children.length).toBe(1);
  });

  it("contains correct text content", () => {
    expect(tree.children[0].children[0]).toBe("Item");
  });
});
