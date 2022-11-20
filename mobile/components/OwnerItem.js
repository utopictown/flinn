import React, { useCallback, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import CircleAlp from "./CircleAlp";
import ItemLayout from "./ItemLayout";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import capitalizeString from "../helpers/capitalizeString";
import FavoriteToggle from "./FavoriteToggle";

const OwnerItem = ({ isFavorited, data }) => {
  const { navigate } = useNavigation();

  const handlePressItem = useCallback((id) => {
    navigate("Detail", { id });
  }, []);

  return (
    <View>
      <ItemLayout
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 0,
          paddingHorizontal: 0,
          paddingVertical: 0,
          marginBottom: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => handlePressItem(data.id)}
          style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
        >
          <CircleAlp
            style={{
              marginLeft: 16,
              marginRight: 16,
              width: 40,
              height: 40,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              borderColor: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>
              {data.firstName[0].toUpperCase()}
              {data.lastName[0].toUpperCase()}
            </Text>
          </CircleAlp>
          <Text
            style={{
              fontSize: 14,
              color: "black",
              lineHeight: 20,
              fontWeight: "450",
            }}
          >
            {capitalizeString(data.firstName)} {capitalizeString(data.lastName)}
          </Text>
        </TouchableOpacity>
        <FavoriteToggle id={data.id} isFavorited={isFavorited} />

        <Pressable onPress={() => handlePressItem(data.id)} style={{ padding: 26, paddingLeft: 3 }}>
          <AntDesign name="right" size={12} color="#B2B2B2" />
        </Pressable>
      </ItemLayout>
    </View>
  );
};

export default OwnerItem;
