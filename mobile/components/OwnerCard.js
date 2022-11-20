import React from "react";
import { Pressable, Text, View } from "react-native";
import CircleAlp from "./CircleAlp";
import ItemLayout from "./ItemLayout";
import SectionTitle from "./SectionTitle";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useMutation } from "react-query";
import addFavorite from "../mutations/add-favorite";

const OwnerCard = ({ data }) => {
  const { mutate } = useMutation(addFavorite);
  return (
    <View>
      <SectionTitle>Owner Card</SectionTitle>
      <ItemLayout style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <CircleAlp
          style={{
            marginRight: 42,
            width: 56,
            height: 56,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <Text style={{ fontSize: "20.25px", color: "white", fontWeight: "600" }}>
            {data.firstName[0] + data.lastName[0]}
          </Text>
        </CircleAlp>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={{ fontSize: 12, color: "#A1AFC3", lineHeight: 22 }}>First Name</Text>
            <Text style={{ fontSize: 14, lineHeight: 22 }}>{data.firstName}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 12, color: "#A1AFC3", lineHeight: 22 }}>Last Name</Text>
            <Text style={{ fontSize: 14, lineHeight: 22 }}>{data.lastName}</Text>
          </View>
        </View>
        {data.isFavorited ? (
          <Pressable onPress={() => mutate(data.id)}>
            <AntDesign name="star" size={20} color="#7C42FF" />
          </Pressable>
        ) : (
          <Pressable onPress={() => mutate(data.id)}>
            <AntDesign name="staro" size={20} color="#DCDCDC" />
          </Pressable>
        )}
      </ItemLayout>
    </View>
  );
};

export default OwnerCard;
