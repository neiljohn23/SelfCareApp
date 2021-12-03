import React from "react";
import { StyleSheet, Text, Button, View, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EventScreen from "./screens/EventScreen.js";
import BotScreen from "./screens/BotScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import NewEventScreen from "./screens/NewEventScreen";

{
  /* Initializes component we can use to enable navigation between multiple screens. */
}
const Stack = createNativeStackNavigator();

{
  /* This is the entry point of our app!! */
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Events" component={EventScreen} />
        <Stack.Screen name="ChatBot" component={BotScreen} />
        <Stack.Screen name="NewEvent" component={NewEventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
