import React from "react";
import { View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import SectionTitle from "./SectionTitle";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useQueryClient } from "react-query";
import { useNavigation } from "@react-navigation/native";

export const NAME = "NAME";
export const CATS_COUNT = "CATS_COUNT";

const SortSection = () => {
  const queryClient = useQueryClient();
  const sortOptions = [
    { key: NAME, value: "Name" },
    { key: CATS_COUNT, value: "Cats Count" },
  ];

  const { setParams } = useNavigation();

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <SectionTitle style={{ color: "#92929D", marginRight: 0 }}>Sort By:</SectionTitle>
      <SelectDropdown
        buttonStyle={{
          backgroundColor: "transparent",
          width: 120,
          height: 16,
        }}
        dropdownStyle={{
          width: 100,
          left: 250,
          borderRadius: 12,
        }}
        rowStyle={{ height: 40, borderWidth: 0 }}
        rowTextStyle={{ fontSize: 12, textAlign: "left" }}
        buttonTextStyle={{
          fontSize: 12,
          color: "#696974",
          marginRight: 2,
          marginLeft: 0,
          textAlign: "left",
        }}
        defaultButtonText="Name"
        renderDropdownIcon={() => <AntDesign name="caretdown" style={{ marginRight: 24 }} size={10} color="#92929D" />}
        data={sortOptions}
        onSelect={(selectedItem, index) => {
          setParams({ sortBy: selectedItem.key });
          queryClient.invalidateQueries("getOwnerList");
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.value;
        }}
        rowTextForSelection={(item, index) => {
          return item.value;
        }}
      />
    </View>
  );
};

export default SortSection;
