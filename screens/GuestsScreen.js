import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "twrnc";

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={tw`justify-between h-full`}>
      <View>
        <View
          style={tw`flex-row justify-between px-5 py-4 border-b-[1px] border-gray-200`}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Adults</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={tw`w-8 h-8 bg-gray-200 rounded-full items-center justify-center`}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={tw`w-8 h-8 bg-gray-200 rounded-full items-center justify-center`}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View
          style={tw`flex-row justify-between px-5 py-4 border-b-[1px] border-gray-200`}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Children</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 2-12</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={tw`w-8 h-8 bg-gray-200 rounded-full items-center justify-center`}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {children}
            </Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={tw`w-8 h-8 bg-gray-200 rounded-full items-center justify-center`}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View
          style={tw`flex-row justify-between px-5 py-4 border-b-[1px] border-gray-200`}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Infants</Text>
            <Text style={{ color: "#8d8d8d" }}>Under 2</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={tw`w-8 h-8 bg-gray-200 rounded-full items-center justify-center`}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {infants}
            </Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={tw`w-8 h-8 bg-gray-200 rounded-full items-center justify-center`}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Explore",
            params: {
              screen: "SearchResults",
              params: {
                guests: adults + children,
                viewport: route.params?.viewport,
              },
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: "#f15454",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;

const styles = StyleSheet.create({});
