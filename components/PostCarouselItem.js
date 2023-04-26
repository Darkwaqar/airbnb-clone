import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const PostCarouselItem = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate("Post", { post: post });
  };
  return (
    // <Text>hello</Text>
    <Pressable
      onPress={goToPostPage}
      style={[tw`h-28 bg-white m-1 rounded-lg`, { width: width - 60 }]}
    >
      <View style={tw`bg-white rounded-lg `}>
        <View style={tw`flex-row`}>
          {/* Image  */}
          <Image
            style={tw`h-full aspect-square rounded-l-lg`}
            resizeMode="cover"
            source={{ uri: post.image }}
          />

          <View style={{ flex: 1, marginHorizontal: 10 }}>
            {/* Bed & Bedroom  */}
            <Text style={tw`text-lg my-2`}>
              {post.bed} bed {post.bedroom} bedroom
            </Text>

            {/* Type & Description */}
            <Text style={tw`text-sm`} numberOfLines={2}>
              {post?.type}. {post?.title}
            </Text>

            {/*  Old price & new price */}
            <Text style={tw`text-sm my-2`}>
              <Text style={tw`font-bold`}>${post.newPrice} </Text>/ night
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;

const styles = StyleSheet.create({});
