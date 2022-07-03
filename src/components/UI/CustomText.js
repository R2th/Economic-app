import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
// Text.defaultProps.allowFontScaling = false;
const CustomText = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Rubik: require("../../assets/Fonts/Rubik-Regular.ttf"),
      });
      setLoaded(true);
    };
    loadFonts();
  }, []);

  return (
    <>
      {loaded && (
        <Text
          allowFontScaling={false}
          selectable={props.selectable}
          style={{ ...styles.text, ...props.style }}
        >
          {props.children}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "Rubik",
  },
});

export default CustomText;
