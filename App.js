import {
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from "react-native";
import { colors } from "./src/utils/colors";
import Focus from "./src/features/Focus";
import { useState } from "react";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <View>
          <Text>iam going to do something for {currentSubject}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
