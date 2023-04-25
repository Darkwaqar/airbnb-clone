import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen from "./screens/DestinationSearchScreen";
import GuestsScreen from "./screens/GuestsScreen";
import PostScreen from "./screens/PostScreen";
import Post from "./components/Post";
import feed from "./data/feed";
import SearchResults from "./screens/SearchResults";
import HomeTabNavigator from "./navigation/HomeTabNavigator";

const Stack = createStackNavigator();
import { Amplify } from "aws-amplify";
import awsConfig from "./src/aws-exports";

Amplify.configure(awsConfig);

export default function App() {
  return (
    <NavigationContainer>
      {/* <DestinationSearchScreen></DestinationSearchScreen> */}
      {/* <SearchResults posts={feed}></SearchResults> */}
      {/* <ScrollView>
        <Post post={feed[0]}> </Post>
        <Post post={feed[2]}> </Post>
        <Post post={feed[3]}> </Post>
      </ScrollView> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination",
          }}
        />

        <Stack.Screen
          name={"Guests"}
          component={GuestsScreen}
          options={{
            title: "How many people?",
          }}
        />

        <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Accommodation",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
