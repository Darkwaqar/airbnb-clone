import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useRoute } from "@react-navigation/native";
import SearchResultsMap from "../screens/SearchResultsMap";
import SearchResults from "../screens/SearchResults";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../src/graphql/queries";

// import posts from "../data/feed";

const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = () => {
  const [posts, setPosts] = useState([]);

  const route = useRoute();
  const { guests, viewport } = route.params;
  console.log(route);

  // {"northeast": {"lat": 25.63980105234357, "lng": 67.65694166023007},
  //  "southwest": {"lat": 24.74660367749837, "lng": 66.65398221921414}}

  //tenerife spain
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              and: {
                maxGuests: {
                  ge: guests,
                },
                latitude: {
                  between: [viewport.southwest.lat, viewport.northeast.lat],
                },
                longitude: {
                  between: [viewport.southwest.lng, viewport.northeast.lng],
                },
              },
            },
          })
        );

        setPosts(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
        indicatorStyle: {
          backgroundColor: "#f15454",
        },
      }}
    >
      <Tab.Screen name={"list"}>
        {() => <SearchResults posts={posts} />}
      </Tab.Screen>
      <Tab.Screen name={"map"}>
        {() => <SearchResultsMap posts={posts} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;

const styles = StyleSheet.create({});
