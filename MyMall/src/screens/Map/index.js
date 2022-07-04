import * as React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

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
          />
          {markers.map((item, idx) => (
            <Marker
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.title}
              description={item.description}
              key={idx}
            />
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
