import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Image,
  Text,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Button to navigate to the events screen (TO BE UPDATED FOR SURE) */}
      <TouchableOpacity
        style={styles.events_button}
        onPress={() => navigation.navigate("Events")}
      >
        <Text>Go to Events Page!</Text>
      </TouchableOpacity>

      {/* Robot button at bottom of screen to navigate to the chat bot */}
      <TouchableOpacity
        style={styles.bot_button}
        onPress={() => navigation.navigate("ChatBot")}
      >
        <Image source={require("../assets/robot.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  events_button: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  bot_button: {
    flex: 2,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
});

export default HomeScreen;
