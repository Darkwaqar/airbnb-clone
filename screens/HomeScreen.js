import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require("../assets/wallpaper.jpg")}
        style={tw`w-full h-[500px] flex-1 absolute`}
      ></ImageBackground>
      <SafeAreaView>
        <Pressable
          style={tw`bg-white w-72 mx-auto h-14 rounded-full z-10 flex-row justify-center items-center top-6 my-3`}
          onPress={() => navigation.navigate("Destination Search")}
        >
          <Fontisto name="search" size={25} color={"#f15454"} />
          <Text style={tw`text-lg font-bold`}>Where are you going?</Text>
        </Pressable>
      </SafeAreaView>
      <Text style={tw`text-8xl font-bold text-white w-3/4 mt-16 ml-4 `}>
        Go Near
      </Text>
      <Pressable
        style={tw`bg-white w-[200px] m-4 p-2 rounded-lg justify-center items-center`}
        onPress={() => console.warn("Explore Btn clicked")}
      >
        <Text style={tw`text-lg font-bold`}>Explore nearby stays</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
