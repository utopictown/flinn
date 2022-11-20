import React from "react";
import { Text } from "react-native";

const SectionTitle = ({ children, style }) => {
  return <Text style={{ margin: 24, color: "#A1AFC3", fontSize: 14, fontWeight: "450", ...style }}>{children}</Text>;
};

export default SectionTitle;
