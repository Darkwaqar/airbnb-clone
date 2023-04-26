import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import tw from "twrnc";

const DetailedPost = (props) => {
  const post = props.post;
  return (
    <ScrollView>
      <View style={tw`m-5`}>
        {/* Image  */}
        <Image
          style={tw`w-full h-64 rounded-xl`}
          resizeMode="cover"
          source={{ uri: post?.image }}
        />

        {/* Bed & Bedroom  */}
        <Text style={tw`my-2 text-[#5b5b5b]`}>
          {post?.bed} bed {post?.bedroom} bedroom
        </Text>

        {/* Type & Description */}
        <Text style={tw`text-lg leading-tight`} numberOfLines={2}>
          {post?.type}. {post?.title}
        </Text>

        {/*  Old price & new price */}
        <Text style={tw`text-lg my-2`}>
          <Text style={tw`text-[#5b5b5b] line-through`}>${post?.oldPrice}</Text>
          <Text style={styles.price}> ${post?.newPrice} </Text>/ night
        </Text>

        {/*  Total price */}
        <Text style={tw`text-[#5b5b5b] underline`}>
          ${post?.totalPrice} total
        </Text>

        <Text style={tw`my-5 text-sm leading-6`}>{post?.description}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailedPost;

const styles = StyleSheet.create({});
