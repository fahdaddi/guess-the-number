import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const NumberDisplay = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={styles.number}> {props.children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  number: {
    color: Colors.primary,
    fontSize: 16,
  },
});

export default NumberDisplay;
