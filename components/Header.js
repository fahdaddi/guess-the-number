import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.primary,
    fontSize: 28,
    // fontWeight: "bold",
    fontFamily: "montserrat-medium",
  },
});

export default Header;
