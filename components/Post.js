import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const days = 7;

const Post = (props) => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate("Post", { post: post });
  };
  return (
    <Pressable
      onPress={goToPostPage}
      // shadow-md bg-white rounded-xl p-2
      style={tw`m-5 `}
    >
      {/* Image  */}
      <Image
        style={[tw`w-full rounded-xl`, { aspectRatio: 3 / 2 }]}
        resizeMode="cover"
        source={{ uri: post?.image }}
      />

      {/* Bed & Bedroom  */}
      {/* style={styles.bedrooms} */}
      <Text style={tw`my-2 text-[#5b5b5b]`}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={tw`text-lg leading-6`} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/*  Old price & new price */}
      <Text style={tw`text-lg my-3`}>
        <Text style={tw`text-[#5b5b5b] line-through`}>${post.oldPrice}</Text>
        <Text style={tw`font-bold`}> ${post.newPrice} </Text>/ night
      </Text>

      {/*  Total price */}
      <Text style={tw`text-[#5b5b5b] underline`}>
        ${post.newPrice * days} total
      </Text>
    </Pressable>
  );
};

export default Post;

const styles = StyleSheet.create({});
