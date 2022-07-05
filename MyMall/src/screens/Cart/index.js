import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// import styles from "../../../App.module.css";
import CustomText from "../../components/UI/CustomText";
import { CartContext } from "../../contexts/CartContext";

const card = require("../../utils/sample_data/cart.json");

const CartScreen = ({ navigation }) => {
  const { action, state } = React.useContext(CartContext);
  return (
    <SafeAreaView style={{ backgroundColor: "white", marginTop: 20 }}>
      <View style={styles.halfCircle}></View>
      <View style={styles.card}>
        <View style={styles.halfCircle2}></View>
        <TouchableOpacity
          style={styles.cardTop}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.cardTopLogo}
            source={require("../../assets/Images/nike.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 28,
          }}
        >
          <CustomText style={styles.cardTitle}>Your cart</CustomText>
          <CustomText style={styles.cardTitle}>
            $ {action.calculatePrice()}
          </CustomText>
        </View>
        <View style={styles.cardBody}>
          <ScrollView style={styles.cartItems}>
            <>
              {" "}
              {state.length ? (
                state.map((item, idx) => (
                  <View style={styles.cartItem} key={idx}>
                    <View style={styles.cartItemLeft}>
                      <View style={styles.cartItemImage}>
                        <View style={styles.cartItemsImageBlock}>
                          <Image
                            source={{ uri: item.image }}
                            style={{
                              width: "140%",
                              height: "80%",
                              transform: [{ rotate: "-28deg" }],
                            }}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.cartItemRight}>
                      <Text style={styles.cartItemName}>{item.name}</Text>
                      <Text style={styles.cartItemPrice}>$ {item.price}</Text>
                      <View style={styles.cartItemActions}>
                        <View style={styles.cartItemCount}>
                          <View style={styles.cartItemCountButton}>
                            <Text
                              style={styles.cartItemCountButtonText}
                              onPress={() => {
                                if (item.count === 1) {
                                  action.removeFromCart(item.id);
                                } else {
                                  action.updateNumberProducts(item.id, -1);
                                }
                              }}
                            >
                              -
                            </Text>
                          </View>
                          <Text style={styles.cartItemCountNumber}>
                            {item.count}
                          </Text>
                          <View style={styles.cartItemCountButton}>
                            <Text
                              style={styles.cartItemCountButtonText}
                              onPress={() =>
                                action.updateNumberProducts(item.id, 1)
                              }
                            >
                              +
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity
                          style={styles.cartItemRemove}
                          onPress={() => action.removeFromCart(item.id)}
                        >
                          <Image
                            source={require("../../assets/Images/trash.png")}
                            style={styles.cartItemRemoveIcon}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))
              ) : (
                <View>
                  <Text>Your Cart is empty</Text>
                  <View
                    style={{
                      backgroundColor: "#fed922",
                      // paddingHorizontal: 10,
                      borderRadius: 20,
                      borderColor: "#000",
                      marginRight: 20,
                      marginTop: 20,
                    }}
                  >
                    <Text
                      onPress={() => navigation.navigate("Home")}
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                        fontWeight: "bold",
                        paddingVertical: 10,
                        color: "#eee",
                      }}
                    >
                      Back to Home
                    </Text>
                  </View>
                </View>
              )}
              <View style={{ marginBottom: 350 }}></View>
            </>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: "#fff",
    marginLeft: 28,
    position: "relative",
    marginBottom: 20,
    zIndex: 2,
  },
  halfCircle: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 300,
    backgroundColor: "#f6c90e",
    top: -200,
    left: -180,
    zIndex: 1,
  },
  halfCircle2: {
    position: "absolute",
    width: 310,
    height: 330,
    borderRadius: 300,
    backgroundColor: "#f6c90e",
    top: -235,
    left: -215,
    zIndex: 0,
  },
  cardTop: {
    marginVertical: 12,
    position: "relative",
  },
  cardTopLogo: {
    width: 50,
    height: 25,
    overflow: "hidden",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  cardPrice: {
    float: "right",
  },
  cardBody: {},
  cartItems: {
    paddingRight: 28,
    position: "relative",
  },
  cartItem: {
    position: "relative",
    display: "flex",
    paddingVertical: 20,
    flexDirection: "row",
    marginBottom: 20,
  },
  cartItemLeft: {
    flex: 0,
    marginRight: 20,
  },
  cartItemRight: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
    // lineHeight: 1.5,
    marginBottom: 10,
  },
  cartItemPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cartItemActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  cartItemCount: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 2,
    flexDirection: "row",
    gap: 5,
  },
  cartItemCountNumber: {
    fontSize: 14,
    marginVertical: 8,
    width: 20,
    textAlign: "center",
    marginRight: 10,
  },
  cartItemCountButton: {
    width: 28,
    height: 28,
    borderRadius: 28,
    backgroundColor: "#eee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
    }),
    marginRight: 10,
  },
  cartItemCountButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 28,
  },
  cartItemRemove: {
    width: 28,
    height: 28,
    borderRadius: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6c90e",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  cartItemRemoveIcon: {
    width: 16,
    height: 16,
  },
  cartItemImage: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: "rgb(77, 49, 127)",
    marginRight: 34,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  cartItemsImageBlock: {
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
});

export default CartScreen;
