import {
  StyleSheet,
  Text,
  View,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import posts from "../data/feed";
import CustomMarker from "../components/CustomMarker";
import PostCarouselItem from "../components/PostCarouselItem";
const SearchResultsMap = (props) => {
  // const { posts } = props;

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatList = useRef();
  const map = useRef();

  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: viewConfig.current,
      onViewableItemsChanged: onViewableItemsChanged,
    },
  ]);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }
    const index = posts.findIndex((place) => place.id === selectedPlaceId);
    flatList.current.scrollToIndex({ index });

    const selectedPlace = posts[index];
    console.log(selectedPlace);
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        ref={map}
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {posts.map((place) => (
          <CustomMarker
            // coordinate={{
            //   latitude: place.latitude,
            //   longitude: place.longitude,
            // }}
            key={place.id}
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
          ref={flatList}
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PostCarouselItem post={item} key={item.id} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          // viewabilityConfig={viewConfig.current}
          // onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
