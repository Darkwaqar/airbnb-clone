import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "../components/SuggestionRow";
import tw from "twrnc";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/native";

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={tw`p-5`}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate("Guests", {
              viewport: details.geometry.viewport,
            });
          }}
          minLength={2}
          fetchDetails
          styles={{
            textInput: { fontSize: 20, marginBottom: 20 },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
            types: "(cities)",
          }}
          suppressDefaultStyles
          renderRow={(item) => <SuggestionRow item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;

const styles = StyleSheet.create({});
