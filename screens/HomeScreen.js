import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Image,
  Text,
  ImageBackground,
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
        {/* Welome message that uses the name of the user */}
        <Text
          style={{
            position: "absolute",
            top: 81,
            left: 10,
            width: 284,
            fontSize: 22,
          }}
        >
          Welcome back,{" "}
          <Text style={{ fontWeight: "bold" }}>{USER_DATA[0].name}.</Text>
        </Text>
        {/* Everything wrapped in this view is for the emergency banner at the top */}
        <View>
          <ImageBackground
            source={require("../assets/red_emergency.png")}
            style={{
              marginTop: 15,
              width: 250,
              height: 30,
              paddingTop: 6,
              paddingLeft: 10,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
              Having an emergency?
            </Text>
            <TouchableOpacity>
              <ImageBackground
                source={require("../assets/yellow-oval.png")}
                style={{ width: 62, height: 23, top: -20, left: 172 }}
              >
                <Image
                  source={require("../assets/arrow.png")}
                  style={{ top: 4, left: 22 }}
                />
              </ImageBackground>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>

      {/* List of tips */}
      <View>
        <Text style={{ marginTop: 20, left: 20, color: "#444444" }}>
          General Health Tips
        </Text>
        {/* Our custom FlatList component for displaying tips */}
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
    margin: 70,
    fontWeight: "bold",
    justifyContent: "flex-end",
  },
  bot_button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    marginRight: 10,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default HomeScreen;
