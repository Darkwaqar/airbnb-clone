import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import tw from "twrnc";

const SuggestionRow = ({ item }) => {
  return (
    <View
      style={tw`flex-row items-center mb-2  bg-white rounded-lg shadow-lg border border-gray-300`}
    >
      <View style={tw`p-5 bg-gray-100 rounded-lg mr-4`}>
        <Entypo name={"location-pin"} size={30} />
      </View>
      <Text style={tw`text-sm`}>{item.description}</Text>
    </View>
  );
};

export default SuggestionRow;

const styles = StyleSheet.create({});
