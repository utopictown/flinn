import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FetchResult, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import DetailScreen from "./screens/Detail";
import MCIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "react-query";

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation, route }) => {
            return {
              headerStyle: {
                backgroundColor: "#F8F8FF",
                shadowColor: "transparent",
                elevation: 0,
              },
              contentStyle: { backgroundColor: "#F8F8FF" },
              headerShadowVisible: false,
              // headerTransparent: true,
              headerTitle: () => <Header />,
              headerLeft: () =>
                navigation.canGoBack() ? (
                  <MCIcons name="arrow-left" size={24} color="black" onPress={() => navigation.goBack()} />
                ) : null,
            };
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Detail" component={DetailScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
