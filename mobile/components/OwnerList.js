import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import CircleAlp from "./CircleAlp";
import ItemLayout from "./ItemLayout";
import SectionTitle from "./SectionTitle";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "react-query";
import addFavorite from "../mutations/add-favorite";

const OwnerList = ({ isFavorited, data }) => {
  const { navigate } = useNavigation();

  const { mutate, isLoading } = useMutation(addFavorite);

  const handlePressItem = () => {
    navigate("Detail", { id: "nyaa" });
  };

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
        <TouchableOpacity onPress={handlePressItem} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
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
              {data.firstName[0]}
              {data.lastName[0]}
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
            {data.firstName} {data.lastName}
          </Text>
        </TouchableOpacity>
        {isFavorited ? (
          <Pressable onPress={() => mutate(data.id)}>
            <AntDesign name="star" size={20} color="#7C42FF" />
          </Pressable>
        ) : (
          <Pressable onPress={() => mutate(data.id)}>
            <AntDesign name="staro" size={20} color="#DCDCDC" />
          </Pressable>
        )}

        <Pressable onPress={handlePressItem} style={{ padding: 26, paddingLeft: 19 }}>
          <AntDesign name="right" size={12} color="#B2B2B2" />
        </Pressable>
      </ItemLayout>
    </View>
  );
};

export default OwnerList;
