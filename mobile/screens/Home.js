import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Button, RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import OwnerCard from "../components/OwnerCard";
import Owned from "../components/Owned";
import SectionTitle from "../components/SectionTitle";
import SelectDropdown from "react-native-select-dropdown";
import OwnerList from "../components/OwnerList";
import SortSection, { NAME } from "../components/SortSection";
import { useInfiniteQuery, useQuery } from "react-query";
import getOwnerList from "../queries/get-owner-list";
import { useCallback, useState } from "react";

const HomeScreen = ({ route }) => {
  const sortBy = route.params?.sortBy ?? NAME;
  const { data, status, fetchNextPage, error } = useInfiniteQuery(
    ["getOwnerList", { sortBy }],
    ({ pageParam = 1 }) => getOwnerList({ pageParam, sortBy }),
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    }
  );

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const onScrollEnd = useCallback(() => fetchNextPage(), []);

  console.log(data);

  return (
    <View>
      <View style={{ justifyContent: "space-between", flexDirection: "row", position: "relative" }}>
        <SectionTitle>Owners List</SectionTitle>
        <SortSection />
      </View>
      <ScrollView
        style={{ maxHeight: "90%" }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onMomentumScrollEnd={onScrollEnd}
      >
        {status === "loading" ? (
          <Text>Loading...</Text>
        ) : status === "error" ? (
          <Text>Error: {error.message}</Text>
        ) : (
          data.pages.map((page) =>
            page.data.map((_data) => <OwnerList key={_data.id} data={_data} isFavorited={_data.isFavorited} />)
          )
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
