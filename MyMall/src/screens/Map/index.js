import * as React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const markers = [
  // {
  //   latitude: 45,
  //   longitude: 78,
  //   title: "Foo",
  //   subtitle: "1234",
  // },
  {
    latitude: 10.7292998,
    longitude: 105.7751981,
    title: "DC Store",
    subtitle: "Giày Sneaker Cần Thơ",
  },
  {
    latitude: 10.0304022,
    longitude: 105.765224,
    title: "Shop sneaker",
    subtitle: "Shop giày sneaker",
  },
  {
    latitude: 9.7792917,
    longitude: 105.6189041,
    title: "Tab.sneaker",
    subtitle: "Cửa hàng giày dép",
  },
];

const MapScreen = () => {
  const [position, setPosition] = React.useState();
  const [markersCustom, setMarkersCustom] = React.useState(markers);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    })();
  }, []);

  React.useEffect(() => {
    if (position) {
      [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ].map((value) => {
        for (let i = 0; i < 3; i++) {
          let random_latitude = Math.random();
          let random_longitude = Math.random();
          setMarkersCustom((prevState) => [
            ...prevState,
            {
              latitude: random_latitude * 0.05 * value[0] + position.latitude,
              longitude:
                random_longitude * 0.05 * value[1] + position.longitude,
              title: "Shop sneaker",
              subtitle: "Shop giày sneaker",
            },
          ]);
        }
      });
    }
  }, [position]);

  return (
    <View>
      {position && (
        <MapView
          MapView
          style={styles.map}
          initialRegion={position}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsCompass={true}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
        >
          <Marker
            title="Yor are here"
            description="User location"
            coordinate={position}
          >
            <View
              style={{
                backgroundColor: "rgb(77, 49, 127)",
                padding: 8,
                borderRadius: 30,
                zIndex: 2,
              }}
            >
              <AntDesign name="user" size={25} color="#fed922" />
            </View>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: "rgb(77, 49, 127)",
                alignSelf: "center",
                marginTop: -10,
                transform: [{ rotate: "-45deg" }],
                zIndex: 1,
                overflow: "hidden",
              }}
            />
          </Marker>
          {markersCustom.map((item, idx) => (
            <Marker
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.title}
              description={item.description}
              key={idx}
            >
              <View
                style={{
                  backgroundColor: "rgb(77, 49, 127)",
                  padding: 8,
                  borderRadius: 30,
                  zIndex: 2,
                  transform: [{ rotate: "-28deg" }],
                }}
              >
                <MaterialCommunityIcons
                  name="shoe-sneaker"
                  size={30}
                  color="#fed922"
                />
              </View>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "rgb(77, 49, 127)",
                  alignSelf: "center",
                  marginTop: -10,
                  transform: [{ rotate: "-45deg" }],
                  zIndex: 1,
                }}
              />
            </Marker>
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
