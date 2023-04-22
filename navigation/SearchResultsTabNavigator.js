import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useRoute } from "@react-navigation/native";
import SearchResultsMap from "../screens/SearchResultsMap";
import SearchResults from "../screens/SearchResults";

import posts from "../data/feed";

const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = () => {
  // const [posts, setPosts] = useState([]);

  const route = useRoute();
  const { guests, viewport } = route.params;
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const postsResult = await API.graphql(
  //         graphqlOperation(listPosts, {
  //           filter: {
  //             and: {
  //               maxGuests: {
  //                 ge: guests,
  //               },
  //               latitude: {
  //                 between: [viewport.southwest.lat, viewport.northeast.lat],
  //               },
  //               longitude: {
  //                 between: [viewport.southwest.lng, viewport.northeast.lng],
  //               },
  //             },
  //           },
  //         })
  //       );

  //       setPosts(postsResult.data.listPosts.items);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   fetchPosts();
  // }, []);
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
