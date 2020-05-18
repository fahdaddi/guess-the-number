import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Colors from "./constants/colors";

import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

const fetchFonts = () => {
  return Font.loadAsync({
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
};

export default function App() {
  const [choosedNumber, setChoosedNumber] = useState();
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  const startGameHandler = (selectedNumber) => {
    setChoosedNumber(selectedNumber);
  };

  const endGameHandler = (numberOfRounds) => {
    setRoundsNumber(numberOfRounds);
  };

  const RestartGame = () => {
    setRoundsNumber(0);
    setChoosedNumber(null);
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  let currentPage = <StartGame onConfirmNumber={startGameHandler} />;
  if (roundsNumber) {
    currentPage = (
      <GameOver
        userChoice={choosedNumber}
        roundsNumber={roundsNumber}
        onRestartGame={RestartGame}
      />
    );
  } else if (choosedNumber) {
    currentPage = (
      <GameScreen userChoice={choosedNumber} onGameOver={endGameHandler} />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Title here" />
      {currentPage}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    fontFamily: 'montserrat-medium'
  },
});
