import React from "react";
import { Text, View } from "react-native";

const CircleAlp = ({ children, style }) => {
  return (
    <View
      style={{
        borderRadius: "50%",
        backgroundColor: "white",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#36A388",
        borderWidth: 1,
        marginRight: 16,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default CircleAlp;
