import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Image,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";

import TipList from "./../components/TipList.js";
import HealthcareList from "./../components/HealthcareList.js";
import UrgentCare from "./../components/UrgentCare.js";
import EventsNearYou from "./../components/EventsNearYou.js";

const HomeScreen = ({ navigation }) => {
  const USER_DATA = [
    {
      id: 0,
      name: "Ellen",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        {/* Blue swoosh at the top of the page */}
        <Image source={require("../assets/blue-wave.png")} />
        {/* Welome message that uses the name of the user */}
        <Text style={styles.welcome_message}>
          Welcome back,{" "}
          <Text style={{ fontWeight: "bold" }}>{USER_DATA[0].name}.</Text>
        </Text>
        {/* Everything wrapped in this view is for the emergency banner at the top */}
        <View>
          <ImageBackground
            source={require("../assets/red_emergency.png")}
            style={styles.red_banner}
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
        <Text
          style={{ marginTop: 20, left: 20, color: "#444444", fontSize: 15 }}
        >
          General Health Tips
        </Text>
        {/* Our custom FlatList component for displaying tips */}
        <TipList />
      </View>

      {/* List of healthcare cards */}
      <View>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
            left: 20,
            color: "#444444",
            fontSize: 15,
          }}
        >
          Your Healthcare
        </Text>
        <ScrollView
          style={{ flexDirection: "row", left: 15 }}
          horizontal={true}
        >
          <TouchableOpacity style={styles.health_bubble}>
            <Text>Women's Health</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.health_bubble}>
            <Text>Primary Care</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.health_bubble}>
            <Text>Mental Health</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* Our custom FlatList component for displaying healthcare cards */}
        <HealthcareList />
      </View>

      {/* List of urgent care facilities nearby*/}
      <View>
        <Text
          style={{ marginTop: 20, left: 20, color: "#444444", fontSize: 15 }}
        >
          Explore Urgent Care Near You
        </Text>
        {/* Our custom FlatList component for displaying tips */}
        <UrgentCare />
      </View>

      {/* List of tips */}
      <View>
        <Text
          style={{ marginTop: 20, left: 20, color: "#444444", fontSize: 15 }}
        >
          Events Near You
        </Text>
        {/* Our custom FlatList component for displaying tips */}
        <EventsNearYou />
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
    </ScrollView>
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
  welcome_message: {
    position: "absolute",
    top: 81,
    left: 10,
    width: 284,
    fontSize: 22,
  },
  red_banner: {
    marginTop: 15,
    width: 250,
    height: 30,
    paddingTop: 6,
    paddingLeft: 10,
  },
  health_bubble: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#605c6c",
    borderRadius: 50,
    margin: 5,
    padding: 6,
  },
});

export default HomeScreen;
