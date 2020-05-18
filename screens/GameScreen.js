import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";

import Colors from "../constants/colors";

import NumberDisplay from "../components/NumberDisplay";
import Button from "../components/Button";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let number = Math.floor(Math.random() * (max - min)) + min;

  if (number === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return number;
};

const GameScreen = (props) => {
  const [currentsGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    console.log(rounds);

    if (currentsGuess === userChoice) onGameOver(rounds);
  }, [userChoice, currentsGuess, onGameOver, rounds]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentsGuess < props.userChoice) ||
      (direction === "greater" && currentsGuess > props.userChoice)
    ) {
      Alert.alert("Stop Lying!", "😡😡", [{ text: "Sorry", style: "cancel" }]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentsGuess;
    } else {
      currentLow.current = currentsGuess;
    }
    let newNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentsGuess
    );
    setCurrentGuess(newNumber);
    setRounds((currentValue) => currentValue + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's choice</Text>
      <NumberDisplay style={styles.number}>{currentsGuess}</NumberDisplay>
      <Card style={styles.buttonsContainer}>
        <View style={{ width: "45%", height: 40 }}>
          <Button
            onPress={nextGuessHandler.bind(this, "lower")}
            bgColor={Colors.black}
            title={<Feather name="minus" size={24} />}
          />
        </View>
        <View style={{ width: "45%", height: 40 }}>
          <Button
            onPress={nextGuessHandler.bind(this, "greater")}
            bgColor={Colors.primary}
            title={<Feather name="plus" size={24} />}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: "50%",
    paddingHorizontal: 20,
  },
  number: {
    marginVertical: 10,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default GameScreen;
