import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
// import styles from "../../../App.module.css";
import CustomText from "../../components/UI/CustomText";
import { CartContext } from "../../contexts/CartContext";
// Icon
import { AntDesign } from "@expo/vector-icons";
import ShowMoreText from "./ShowMoreText";

const sample_data = require("../../utils/sample_data/shoes.json");

const HomeScreen = ({ navigation }) => {
  const { state, action } = React.useContext(CartContext);

  return (
    <SafeAreaView style={{ backgroundColor: "white", marginTop: 20 }}>
      <View style={styles.halfCircle}></View>
      <View style={styles.card}>
        <View style={styles.halfCircle2}></View>
        <View style={styles.cardTop}>
          <Image
            style={styles.cardTopLogo}
            source={require("../../assets/Images/nike.png")}
          />
        </View>
        <CustomText style={styles.cardTitle}>Our Products</CustomText>
        <View style={styles.cardBody}>
          <ScrollView style={styles.shopItems}>
            <>
              {sample_data.shoes.map((item) => {
                let isAvailable = true;
                state.forEach((_item, idx) => {
                  if (item.id === _item.id) {
                    isAvailable = false;
                    return;
                  }
                });
                return (
                  <View style={styles.shopItem} key={item.id}>
                    <View
                      style={{
                        backgroundColor: "rgb(225, 231, 237)",
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
                      }}
                    >
                      <Image
                        style={styles.shopItemImage}
                        source={{ uri: item.image }}
                      />
                    </View>

                    <View>
                      <Text style={styles.shopItemName}>{item.name}</Text>
                    </View>
                    <View>
                      <ShowMoreText
                        style={styles.shopItemDescription}
                        content={item.description}
                        navigation={navigation}
                        id={item.id}
                      />
                    </View>
                    <View style={styles.shopItemBottom}>
                      <View>
                        <Text style={styles.shopItemPrice}>${item.price}</Text>
                      </View>
                      {isAvailable ? (
                        <View>
                          <Text
                            style={styles.shopItemButton}
                            onPress={() => {
                              action.addToCart(item);
                            }}
                          >
                            ADD TO CART
                          </Text>
                        </View>
                      ) : (
                        <View style={styles.shopItemButton}>
                          <AntDesign
                            name="check"
                            size={20}
                            color="#000"
                            style={{ overflow: "visible" }}
                          />
                        </View>
                      )}
                    </View>
                  </View>
                );
              })}
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
    backgroundColor: "#fff",
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
  cardBody: {
    // height: "calc(100% - 98px)",
    // position: "relative",
    // overflowY: "scroll",
    // scrollbarWidth: "none",
  },
  shopItems: {
    paddingRight: 28,
  },
  shopItem: {
    paddingVertical: 40,
  },
  shopItemImage: {
    borderRadius: 30,
    height: 300,
    width: 300,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    // filter: "drop-shadow(0 30px 20px rgba(0, 0, 0, 0.2))",
    transform: [{ rotate: "-24deg" }],
    marginLeft: -16,
  },
  shopItemName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 26,
    marginBottom: 20,
  },
  shopItemDescription: {
    fontSize: 13,
    color: "#777",
    marginBottom: 20,
  },
  shopItemBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shopItemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f7e4a",
  },
  shopItemButton: {
    backgroundColor: "#f6c90e",
    fontWeight: "900",
    fontSize: 14,
    width: "auto",
    height: 46,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 100,
    position: "relative",
    display: "flex",
    alignItems: "center",
    overflow: "visible",
  },
});

export default HomeScreen;
