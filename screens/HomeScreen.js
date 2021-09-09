import React from "react";
import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Events page"
        onPress={() => navigation.navigate("Events")}
      />
      <Button
        title="Go to ChatBot page"
        onPress={() => navigation.navigate("ChatBot")}
      />
    </View>
  );
};

export default HomeScreen;
