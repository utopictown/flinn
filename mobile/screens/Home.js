import { RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import SectionTitle from "../components/SectionTitle";
import OwnerItem from "../components/OwnerItem";
import SortSection, { NAME } from "../components/SortSection";
import { useInfiniteQuery } from "react-query";
import getOwnerList from "../queries/get-owner-list";
import { useCallback, useState } from "react";
import Loading from "../components/Loading";

const HomeScreen = ({ route }) => {
  const sortBy = route.params?.sortBy ?? NAME;
  const { data, status, fetchNextPage, error } = useInfiniteQuery(
    ["getOwnerList", { sortBy }],
    ({ pageParam = 1 }) => getOwnerList({ pageParam, sortBy }),
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextPage ?? undefined,
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
        {status === "loading" || status === "error" ? (
          <Loading />
        ) : (
          data.pages.map((page) =>
            page.data.map((_data) => <OwnerItem key={_data.id} data={_data} isFavorited={_data.isFavorited} />)
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
