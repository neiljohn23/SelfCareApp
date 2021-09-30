import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";

const EventScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.add_button}
        onPress={() => navigation.navigate("NewEvent")}
      >
        <Text style={styles.add_text}>Go to New Events Page!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  add_button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#605c6c",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#605c6c",
    borderRadius: 5,
    width: 200,
  },
  add_text: {
    justifyContent: "center",
    color: "white",
    fontSize: 20,
    padding: 10,
  },
});

export default EventScreen;
