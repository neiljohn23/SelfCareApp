import React from "react";
import { Text, TextInput, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const NewEventScreen = () => {
  const[eventName, onChangeText] = React.useState(null)

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>
        Add New Event
        </Text>

      <Text style={[styles.labels]}>
        Event Name
      </Text>
      <TextInput
      style={[styles.input]}
      placeholder="Enter Event Name Here"
      onChangeText={onChangeText}
      value={eventName}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },

  title: { 
    alignItems: 'center',
    justifyContent: 'center', 
    fontSize: 25, 
    paddingLeft: 100,
    fontWeight: 'bold'
  },

  labels: {
    alignSelf: "flex-start",  
    fontSize: 15,
    paddingLeft: 25,
    paddingTop: 50,
  },
  
  input: {
    paddingLeft: 150,
  }
});

export default NewEventScreen;
