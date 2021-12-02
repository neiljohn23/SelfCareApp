import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

class NewEventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      hostOrg: "",
      date: new Date(),
      startTime: 0,
      endTime: 0,
      location: "",
    };

    console.log(this.state.eventName);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Blue swoosh at the top of the page */}
        <Image
          source={require("../assets/blue-wave.png")}
          style={{ position: "absolute" }}
        />

        <Text style={styles.title}>Add New Event</Text>

        {/* Container for event name field */}
        <View style={styles.fieldContainer}>
          <Text style={{ flex: 1, margin: 6, fontSize: 14.5, height: 15 }}>
            Event Name
          </Text>
          <TextInput
            style={{ flex: 3, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.eventName}
            onChangeText={(eventName) => {
              this.setState({ eventName });
            }}
          />
        </View>

        {/* Container for host organization field */}
        <View style={styles.fieldContainer}>
          <Text style={{ flex: 1, margin: 6, fontSize: 14.5 }}>
            Host Organization
          </Text>
          <TextInput
            style={{ flex: 1, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.hostOrg}
            onChangeText={(hostOrg) => {
              this.setState({ hostOrg });
            }}
          />
        </View>

        {/* NOTE: holding off on date field until now till I clarify with design team
          what exactly we want it to look like */}

        {/* Container for time field */}
        <View style={styles.fieldContainer}>
          <Text style={{ flex: 1, margin: 6, fontSize: 14.5 }}>Time</Text>
          <TextInput
            style={{ flex: 1, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.hostOrg}
            onChangeText={(startTime) => {
              this.setState({ startTime });
            }}
          />
          <Text style={{ margin: 1 }}> to </Text>
          <TextInput
            style={{ flex: 1, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.hostOrg}
            onChangeText={(endTime) => {
              this.setState({ endTime });
            }}
          />
        </View>

        {/* Container for location field */}
        <View style={styles.fieldContainer}>
          <Text style={{ flex: 1, margin: 6, fontSize: 14.5 }}>Location</Text>
          <TextInput
            style={{ flex: 3, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.eventName}
            onChangeText={(location) => {
              this.setState({ location });
            }}
          />
        </View>

        {/* This button currently does nothing (obvi) */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            margin: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 15,
              padding: 10,
            }}
          >
            Submit for Review
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    paddingTop: 0,
    paddingLeft: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  /* Container to be used to keep label and text input in horizontal line */
  fieldContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },

  /* Same as fieldContainer for now but Ellen created this cause it may end up needing
     to be a bit different from the other fields :) RAWR XD */
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },

  title: {
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: 25,
    paddingLeft: 100,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 5,
  },
});

export default NewEventScreen;
