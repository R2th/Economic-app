import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icon
import { AntDesign } from "@expo/vector-icons";
// Color
import Colors from "../utils/Colors.js";
// Title
import LogoTitle from "../components/LogoTitle/index.js";
// Tab
import HomeScreen from "../screens/Home/index.js";
import CartScreen from "../screens/Cart/index.js";

function NotFoundScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Developing...</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          const color = focused ? "#fed922" : Colors.grey;
          if (route.name === "HomeTab") {
            iconName = "home";
          } else if (route.name === "Favorite") {
            iconName = "hearto";
          } else if (route.name === "Cart") {
            iconName = "shoppingcart";
          }
          return <AntDesign name={iconName} size={28} color={color} />;
        },
      })}
      barStyle={{
        backgroundColor: "#000",
        height: 100,
        justifyContent: "center",
      }}
      activeColor={"#fed922"}
      inactiveColor={Colors.grey}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarLabel: "Trang chủ",
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={NotFoundScreen}
        options={() => ({
          tabBarLabel: "Yêu thích",
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={() => ({
          tabBarLabel: "Giỏ hàng",
          // tabBarBadge: carts.items.length === 0 ? null : carts.items.length,
        })}
      />
    </Tab.Navigator>
  );
};

//Drawer

export default function Navigation() {
  const drawers = [
    {
      name: "HomeTab",
      screen: TabScreen,
      icon: "home-outline",
    },
    {},
  ];
  return (
    <NavigationContainer>
      {/* <Host>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props} />}
          drawerContentOptions={{
            activeTintColor: Colors.grey,
            itemStyle: { marginVertical: 3 },
          }}
        >
          {drawers.map(({ name, icon, label, screen }) => (
            <Drawer.Screen
              key={name}
              name={name}
              component={screen}
              options={() => ({
                title: ({ focused }) => (
                  <CustomText
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: focused ? '#fe' : Colors.grey,
                      fontFamily: "Roboto-Medium",
                    }}
                  >
                    {label}
                  </CustomText>
                ),
                drawerIcon: ({ focused }) => (
                  <MaterialCommunityIcons
                    name={icon}
                    size={23}
                    color={focused ? '#fe' : Colors.grey}
                  />
                ),
              })}
            />
          ))}
        </Drawer.Navigator>
      </Host> */}
      <TabScreen />
    </NavigationContainer>
  );
}
