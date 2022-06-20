import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/spacing";
import { colors } from "../utils/colors";

const Focus = ({ addSubject }) => {
  const [text, setText] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setText(text)}
          label="Search Me!"
        />
        <View style={styles.buttonContainer}>
          <RoundedButton
            style={styles.button}
            title="+"
            size={50}
            onPress={() => addSubject(text)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  buttonContainer: {
    justifyContent: "center",
  },
  inputContainer: {
    justifyContent: "center",
    padding: spacing.lg,
    flexDirection: "row",
  },
});

export default Focus;
