import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/colors";

import Button from "../components/Button";
const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Game is over </Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri : 'data:image/png;base64,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'}}
          // source={require("../assets/sucess.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text> Number of guesses: {props.roundsNumber} </Text>
      <Text> You choice was: {props.userChoice}</Text>
      <View style={{ width: "45%", height: 40, marginTop: 10 }}>
        <Button
          bgColor={Colors.primary}
          title="Start again"
          onPress={props.onRestartGame}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: Colors.primary,
    marginVertical: 10,
    borderWidth: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOver;
