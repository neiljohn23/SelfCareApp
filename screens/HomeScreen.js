import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Image,
  Text,
} from "react-native";

import TipList from "./../components/TipList.js";

const HomeScreen = ({ navigation }) => {
  const USER_DATA = [
    {
      id: 0,
      name: "Ellen",
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        {/* Blue swoosh at the top of the page */}
        <Image source={require("../assets/blue-wave.png")} />
        <Text
          style={{
            position: "absolute",
            top: 81,
            left: 27,
            width: 284,
            fontSize: 22,
          }}
        >
          Welcome back,{" "}
          <Text style={{ fontWeight: "bold" }}>{USER_DATA[0].name}.</Text>
        </Text>
      </View>

      {/* List of tips */}
      <View>
        <TipList style={styles.tip_list} />
      </View>

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
    backgroundColor: "#fff",
  },
  events_button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    margin: 100,
    justifyContent: "flex-end",
  },
  bot_button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  tip_list: {},
});

export default HomeScreen;
