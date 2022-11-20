import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useMutation, useQueryClient } from "react-query";
import addFavorite from "../mutations/add-favorite";
import removeFavorite from "../mutations/remove-favorite";
import AntDesign from "@expo/vector-icons/AntDesign";

const FavoriteToggle = ({ isFavorited, id, style }) => {
  const queryClient = useQueryClient();

  const [favorited, setFavorited] = useState(isFavorited);

  useEffect(() => {
    setFavorited(isFavorited);
  }, [isFavorited]);

  const { mutate: mutateAddFavorite } = useMutation(addFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries("getOwnerList");
      queryClient.invalidateQueries("getOwnerDetail");
    },
  });
  const { mutate: mutateRemoveFavorite } = useMutation(removeFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries("getOwnerList");
      queryClient.invalidateQueries("getOwnerDetail");
    },
  });

  return (
    <Pressable
      onPress={() => (favorited ? mutateRemoveFavorite(id) : mutateAddFavorite(id))}
      style={{ height: 60, width: 50, alignItems: "center", justifyContent: "center", ...style }}
    >
      {favorited ? (
        <AntDesign name="star" size={20} color="#7C42FF" />
      ) : (
        <AntDesign name="staro" size={20} color="#DCDCDC" />
      )}
    </Pressable>
  );
};

export default FavoriteToggle;
