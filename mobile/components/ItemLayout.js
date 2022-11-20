import React from "react";
import { View } from "react-native";

const ItemLayout = ({ children, style }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        marginHorizontal: 24,
        paddingHorizontal: 16,
        paddingVertical: 19,
        shadowRadius: 10,
        shadowOffset: { height: 7 },
        shadowOpacity: 0.04,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default ItemLayout;
