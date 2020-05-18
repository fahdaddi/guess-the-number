import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import Colors from "../constants/colors";

import Card from "../components/Card";
import Button from "../components/Button";
import NumberDisplay from "../components/NumberDisplay";

const StartGame = (props) => {
  const [numberValue, setNumberValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const handleInput = (textValue) => {
    setNumberValue(textValue.replace(/[^0-9]/g, ""));
  };

  const resetInput = () => {
    setConfirmed(false);
    setNumberValue("");
  };

  const confirmInput = () => {
    const choosenNumber = parseInt(numberValue);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 90) {
      Alert.alert(
        "Invalid number",
        "Please provide a number greater than 0 and smaller than 100!",
        [{ text: "Got it 👌🏻", onPress: resetInput(), style: "default" }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setNumberValue("");
  };

  const confirmChoice = () => {
    props.onConfirmNumber(selectedNumber);
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirmCard}>
        <Text>You selected</Text>
        <NumberDisplay style={{ marginTop: 10 }}>
          {selectedNumber}
        </NumberDisplay>
        <View style={{ width: "45%", height: 40, marginTop: 10 }}>
          <Button
            onPress={confirmChoice}
            bgColor={Colors.primary}
            title="Confirm"
          />
        </View>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start New Game!</Text>
        <Card style={styles.card}>
          <Text style={styles.label}>Select a number</Text>
          <TextInput
            autoCompleteTypes="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={handleInput}
            blurOnSubmit
            value={numberValue}
            style={styles.input}
          />
          <View style={styles.buttonsContainer}>
            <View style={{ width: "45%", height: 40 }}>
              <Button
                onPress={resetInput}
                bgColor={Colors.black}
                title="Reset"
              />
            </View>
            <View style={{ width: "45%", height: 40 }}>
              <Button
                onPress={confirmInput}
                bgColor={Colors.primary}
                title="Start"
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    marginTop: "10%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    alignSelf: "center",
    fontFamily: "montserrat-medium",
  },
  card: {
    marginTop: "20%",
    alignSelf: "center",
  },
  label: {
    fontSize: 10,
    color: Colors.primary,
    fontWeight: "300",
    fontFamily: "montserrat-regular",
  },
  input: {
    paddingBottom: 2,
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray,
    fontSize: 20,
    fontFamily: "montserrat-medium",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  confirmCard: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGame;
