import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../constants/colors"

const Button = (props) => {
  return (
      <TouchableOpacity
        onPress={props.onPress}
        style={{ ...styles.button, backgroundColor: props.bgColor }}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 10,
    minHeight: 40,
    height: 40
  },
  buttonText: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: "montserrat-medium",
  },
});

export default Button;
