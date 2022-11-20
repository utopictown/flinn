import React from "react";
import { Text, View } from "react-native";
import ItemLayout from "./ItemLayout";
import AntDesign from "@expo/vector-icons/AntDesign";

const OwnedItem = ({ data }) => {
  return (
    <ItemLayout
      style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ fontSize: 14, color: "black", lineHeight: 22, fontWeight: "700", marginBottom: 8 }}>
            {data.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 12, fontWeight: "450", lineHeight: "15.18px", color: "#A1AFC3" }}>Age:</Text>
            <Text style={{ fontSize: 12, fontWeight: "450", lineHeight: "15.18px", color: "#A1AFC3" }}>{data.age}</Text>
          </View>
        </View>
      </View>
      <AntDesign name="right" size={12} color="#B2B2B2" />
    </ItemLayout>
  );
};

export default OwnedItem;
