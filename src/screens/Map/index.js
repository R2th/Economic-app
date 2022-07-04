import * as React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

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

const MapScreen = ({ navigator }) => {
  const [initialRegion, setInitialRegion] = React.useState();

  const goToInitialLocation = () => {
    let initialRegion = Object.assign({}, this.state.initialRegion);
    initialRegion["latitudeDelta"] = 0.005;
    initialRegion["longitudeDelta"] = 0.005;
    this.mapView.animateToRegion(initialRegion, 2000);
  };

  React.useEffect(() => {
    const getCurrentLocation = async () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let region = {
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
            latitudeDelta: 5,
            longitudeDelta: 5,
          };
          setInitialRegion(region);
        },
        (error) => console.log(error),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
        }
      );
      await getCurrentLocation();
    };
  }, []);

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.7292998,
          longitude: 105.7751981,
          latitudeDelta: 2,
          longitudeDelta: 2,
        }}
        showsUserLocation={true}
      >
        {markers.map((item, idx) => (
          <MapView.Marker
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            title={item.title}
            description={item.description}
            key={idx}
          />
        ))}
      </MapView>
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
