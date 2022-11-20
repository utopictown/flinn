import React from "react";
import { Text, View } from "react-native";
import CircleAlp from "./CircleAlp";
import ItemLayout from "./ItemLayout";
import SectionTitle from "./SectionTitle";
import capitalizeString from "../helpers/capitalizeString";
import FavoriteToggle from "./FavoriteToggle";

const OwnerCard = ({ data }) => {
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
            {data.firstName[0].toUpperCase() + data.lastName[0].toUpperCase()}
          </Text>
        </CircleAlp>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={{ fontSize: 12, color: "#A1AFC3", lineHeight: 22 }}>First Name</Text>
            <Text style={{ fontSize: 14, lineHeight: 22 }}>{capitalizeString(data.firstName)}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 12, color: "#A1AFC3", lineHeight: 22 }}>Last Name</Text>
            <Text style={{ fontSize: 14, lineHeight: 22 }}>{capitalizeString(data.lastName)}</Text>
          </View>
        </View>
        <FavoriteToggle id={data.id} isFavorited={data.isFavorited} style={{ width: 20 }} />
      </ItemLayout>
    </View>
  );
};

export default OwnerCard;
