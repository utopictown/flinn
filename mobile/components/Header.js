import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { useQuery } from "react-query";
import getMaster from "../queries/get-master";
import CircleAlp from "./CircleAlp";

const Header = () => {
  const { data } = useQuery("get-master", getMaster);

  if (!data || !data.data) return <View></View>;

  return (
    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <StatusBar style="dark" />
      <CircleAlp>
        <Text style={{ fontSize: 15, fontWeight: "500", color: "#36A388" }}>
          {data.data.firstName[0]}
          {data.data.lastName[0]}
        </Text>
      </CircleAlp>
      <Text style={{ fontSize: 14, fontWeight: "500" }}>Master: </Text>
      <Text style={{ fontSize: 14, fontWeight: "500" }}>
        {data.data.firstName} {data.data.lastName}
      </Text>
    </View>
  );
};

export default Header;
