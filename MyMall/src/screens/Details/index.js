import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import { AntDesign } from "@expo/vector-icons";

const sample_data = require("../../utils/sample_data/shoes.json");

const DetailScreen = (props) => {
  const idProduct = props.route.params.id;
  const product = sample_data.shoes.filter((item) => item.id === idProduct)[0];
  const { action } = React.useContext(CartContext);

  return (
    <View style={styles.container}>
      <ScrollView style={{ paddingRight: 20 }}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }}
            style={{
              borderRadius: 30,
              height: 300,
              width: 300,
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              // filter: "drop-shadow(0 30px 20px rgba(0, 0, 0, 0.2))",
              transform: [{ rotate: "-24deg" }],
              marginLeft: -16,
            }}
          />
        </View>
        <Text style={styles.title}>{product.name}</Text>
        <View
          style={{
            marginVertical: 30,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: product.color,
                width: 30,
                height: 30,
                borderRadius: 30,
                borderWidth: 3,
                borderColor: "#fed922",
                marginRight: -10,
                zIndex: 1,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: product.color,
                backgroundColor: "#fed922",
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                paddingLeft: 15,
                paddingRight: 10,
              }}
            >
              {product.color}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#0f7e4a",
              marginRight: 10,
            }}
          >
            {product.price} $
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}>
            Rating
          </Text>
          <View>
            {product.rating &&
              product.rating.map((item, idx) => {
                const sum = product.rating.reduce(
                  (prevState, item) => prevState + item,
                  0
                );
                return (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    key={idx}
                  >
                    <Text style={{ fontWeight: "bold" }}>{item}</Text>
                    <View
                      style={{
                        height: 20,
                        backgroundColor: "#eee",
                        borderColor: "#0f7e4a",
                        borderWidth: 1,
                        marginBottom: 8,
                        marginLeft: 20,
                        borderRadius: 8,
                        marginRight: 15,
                        width: "80%",
                      }}
                    >
                      <View
                        style={{
                          width: `${(item / sum).toFixed(2) * 100}%`,
                          backgroundColor: "#fed922",
                          height: 18,
                          borderRadius: 8,
                        }}
                      ></View>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}>
            Description
          </Text>
          <Text style={styles.description}>
            {`     ${product.description}`}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.addButton}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            paddingVertical: 10,
            color: "#eee",
          }}
          onPress={() => {
            action.addToCart(product);
            props.navigation.navigate("Cart");
          }}
        >
          ADD TO CART
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingVertical: 50,
  },
  imageContainer: {
    backgroundColor: "rgb(225, 231, 237)",
    marginTop: 15,
    borderRadius: 30,
    height: 380,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    textShadowColor: "black",
    textShadowOffset: { width: 10, height: 10 },
  },
  addButton: {
    backgroundColor: "#fed922",
    // paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: "#000",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 15,
      },
    }),
    marginRight: 20,
  },
  section: {
    marginBottom: 30,
  },
  description: {
    color: "#777",
    fontSize: 16,
  },
});

export default DetailScreen;
