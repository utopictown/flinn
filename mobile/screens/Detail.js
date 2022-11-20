import React, { useCallback, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import OwnerCard from "../components/OwnerCard";
import Owned from "../components/Owned";
import { useRoute } from "@react-navigation/native";
import { DeviceMotion } from "expo-sensors";
import { useMutation, useQuery, useQueryClient } from "react-query";
import getOwnerDetail from "../queries/get-owner-detail";
import setMaster from "../mutations/set-master";
import Loading from "../components/Loading";

const DetailScreen = () => {
  const [rotationRate, setRotationRate] = useState({ alpha: 0, beta: 0, gamma: 0 });
  const { params } = useRoute();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(setMaster, {
    onSuccess: () => {
      queryClient.invalidateQueries("getMaster");
    },
  });

  const id = params.id;

  const { data, isLoading, isError } = useQuery(["getOwnerDetail", { id }], () => getOwnerDetail({ id }));

  useEffect(() => {
    DeviceMotion.addListener(async (e) => {
      const threshold = 2.4;

      const diffAlpha = e.rotationRate.alpha - rotationRate.alpha;
      const diffBeta = e.rotationRate.beta - rotationRate.beta;
      const diffGamma = e.rotationRate.gamma - rotationRate.gamma;

      if (diffAlpha > threshold || diffBeta > threshold || diffGamma > threshold) {
        await mutateAsync(data.data.id);
      }

      setRotationRate(e.rotationRate);
    });
    return () => {
      DeviceMotion.removeAllListeners();
    };
  }, [data]);

  const handleButton = useCallback((id) => {
    mutateAsync(id);
  }, []);

  if (isLoading || !data?.data || isError) return <Loading />;

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
        onPress={() => handleButton(data.data.id)}
      >
        <Text style={{ color: "#FCFCFC", fontSize: 18, fontWeight: "500" }}>Make Master</Text>
      </Pressable>
    </View>
  );
};

export default DetailScreen;
