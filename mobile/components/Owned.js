import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import CircleAlp from "./CircleAlp";
import ItemLayout from "./ItemLayout";
import SectionTitle from "./SectionTitle";
import AntDesign from "@expo/vector-icons/AntDesign";
import OwnedItem from "./OwnedItem";

const Owned = ({ style, data }) => {
  return (
    <View style={{ ...style }}>
      <SectionTitle style={{ marginBottom: 8 }}>Cats</SectionTitle>
      <ScrollView style={{ height: "58%" }}>
        {data.map((_data, key) => (
          <OwnedItem key={key} data={_data} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Owned;
