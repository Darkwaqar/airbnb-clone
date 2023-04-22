import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Post from "../components/Post";
const SearchResults = (props) => {
  const { posts } = props;
  return (
    <View>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
