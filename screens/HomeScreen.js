import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";

import TipList from "./../components/TipList.js";
import HealthcareList from "./../components/HealthcareList.js";
import UrgentCareList from "./../components/UrgentCareList.js";
import EventsNearYou from "./../components/EventsNearYou.js";
import EducationList from "./../components/EducationList.js";
import ExploreTopicsList from "./../components/ExploreTopics.js";

const HomeScreen = ({ navigation }) => {
  const USER_DATA = [
    {
      id: 0,
      name: "Ellen",
    },
  ];

  return (
    <View style={{ flexDirection: "column" }}>
      <ScrollView style={styles.container}>
        {/* Stuff at the top wrapped in this View: 
          blue swoosh; welcome message; emergency banner */}
        <View>
          {/* Blue swoosh at the top of the page */}
          <Image
            source={require("../assets/blue-wave.png")}
            resizeMode="stretch"
            style={{ width: "100%" }}
          />
          {/* Welome message that uses the name of the user */}
          <Text style={styles.welcome_message}>
            Welcome back,{" "}
            <Text style={{ fontWeight: "bold" }}>{USER_DATA[0].name}.</Text>
          </Text>

          {/* Everything wrapped in this view is for the emergency banner at the top */}
          <View>
            <TouchableOpacity style={styles.red_banner}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 14,
                  textDecorationLine: "underline",
                }}
              >
                Having an emergency?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* General Health Tips list (uses custom TipList component) */}
        <View>
          <Text
            style={{ left: 20, color: "#444444", fontSize: 15, marginTop: 20 }}
          >
            General Health Tips
          </Text>
          {/* Our custom FlatList component for displaying tips */}
          <TipList />
        </View>

        {/* Your Healthcare list (uses custom HealthcareList component) */}
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
          {/* The little ovals above the list (see Figma) */}
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
          {/* Our custom FlatList component for displaying healthcare cards in a list */}
          <HealthcareList />
        </View>

        {/* Explore Urgent Care Near You list (uses custom UrgentCareList component) */}
        <View>
          <Text
            style={{ marginTop: 20, left: 20, color: "#444444", fontSize: 15 }}
          >
            Explore Urgent Care Near You
          </Text>
          {/* Our custom FlatList component for displaying tips */}
          <UrgentCareList />
        </View>

        {/* Events Near You list (uses custom EventsNearYou list) */}
        <View>
          <Text
            style={{ marginTop: 20, left: 20, color: "#444444", fontSize: 15 }}
          >
            Events Near You
          </Text>
          {/* Our custom FlatList component for displaying events near you */}
          <EventsNearYou />
        </View>

        {/* Education from around campus list (uses custom EducationList list) */}
        <View>
          <Text
            style={{ marginTop: 20, left: 20, color: "#444444", fontSize: 15 }}
          >
            Education From Around Campus
          </Text>
          {/* Our custom FlatList component for displaying events near you */}
          <EducationList />
        </View>

        {/* Explore topics list (uses custom ExploreTopicsList list) */}
        <View>
          <Text
            style={{ marginTop: 20, left: 20, color: "#444444", fontSize: 15 }}
          >
            Explore Topics
          </Text>
          {/* Our custom FlatList component for displaying events near you */}
          <ExploreTopicsList />
        </View>

        {/* Button to navigate to the events screen (TO BE UPDATED FOR SURE) */}
        <TouchableOpacity
          style={styles.events_button}
          onPress={() => navigation.navigate("Events")}
        >
          <Text>Go to Events Page!</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottom_bar}>
        {/* Robot button at bottom of screen to navigate to the chat bot */}
        <TouchableOpacity
          style={styles.bot_button}
          onPress={() => navigation.navigate("ChatBot")}
        >
          <Image source={require("../assets/robot.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  events_button: {
    backgroundColor: "#e0ded7",
    borderRadius: 20,
    padding: 10,
    margin: 70,
    fontWeight: "bold",
    width: 145,
    justifyContent: "flex-end",
  },
  bottom_bar: {
    backgroundColor: "#5A5B68",
    position: "absolute",
    height: "9.5%",
    width: "100%",
    justifyContent: "flex-end",
    bottom: 0,
  },
  bot_button: {
    borderRadius: 20,
    padding: 15,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    position: "absolute",
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
    backgroundColor: "#FF7373",
    width: "100%",
    height: 30,
    padding: 5,
    alignItems: "center",
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
