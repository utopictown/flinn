import React, { useEffect, useState } from "react";
import { Button, Pressable, ScrollView, Text, View } from "react-native";
import OwnerCard from "../components/OwnerCard";
import Owned from "../components/Owned";
import { useRoute } from "@react-navigation/native";
import OwnerList from "../components/OwnerList";
import { DeviceMotion } from "expo-sensors";
import { useMutation, useQuery } from "react-query";
import getOwnerDetail from "../queries/get-owner-detail";
import setMaster from "../mutations/set-master";

const DetailScreen = () => {
  const [rotationRate, setRotationRate] = useState(0);
  const { params } = useRoute();
  const { mutate } = useMutation(setMaster);
  console.log(params);

  const { data } = useQuery("getOwnerDetail", getOwnerDetail);

  useEffect(() => {
    DeviceMotion.addListener((e) => {
      const diff = e.rotationRate.alpha - rotationRate;
      setRotationRate(e.rotationRate.alpha);
      if (diff > 3) {
        console.log("should set");
      }
    });
    return () => {
      DeviceMotion.removeAllListeners();
    };
  }, []);

  const handleButton = () => {
    console.log("yoooo");
    mutate(data.data.id);
  };

  if (!data)
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );

  console.log(data.data.cats);

  return (
    <View>
      <OwnerCard data={data.data} />
      <Owned data={data.data.cats} />
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#3a7f6e" : "#36A388",
          marginTop: 12,
          marginHorizontal: 54,
          borderRadius: 8,
          height: 48,
          alignItems: "center",
          justifyContent: "center",
        })}
        onPress={handleButton}
      >
        <Text style={{ color: "#FCFCFC", fontSize: 18, fontWeight: "500" }}>Make Master</Text>
      </Pressable>
    </View>
  );
};

export default DetailScreen;
