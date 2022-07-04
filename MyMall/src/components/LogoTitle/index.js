import * as React from "react";
import { Text, StyleSheet } from "react-native";

const LogoTitle = (props) => {
  return <Text styles={styles.container}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: "14px",
    textAlign: "center",
  },
});

export default LogoTitle;
