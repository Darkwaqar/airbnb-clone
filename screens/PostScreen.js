import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { useRoute } from "@react-navigation/native";

// import places from "../data/feed";
import DetailedPost from "../components/DetailedPost";

const PostScreen = () => {
  const route = useRoute();

  // const post = places.find((place) => place.id === route.params?.postId);
  return (
    <View style={tw`bg-white`}>
      <DetailedPost post={route.params?.post} />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({});
