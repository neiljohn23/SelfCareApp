import React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";

const EventScreen = ({ navigation }) => {
  const DATA = [
    {
      id: 0,
      title: "Biking for Beginners",
      location: "UMD RecWell",
      address: "Bike Shop, Cole #0249",
      date: "January 29, 2021",
      img: require("../assets/woman-on-bike.png"),
    },
    {
      id: 1,
      title: "Counseling Center Peer-Support Group",
      location: "UMD Counseling Center",
      address: "ONLINE",
      date: "January 30, 2021",
      img: require("../assets/coin-jar.png"),
    },
    {
      id: 2,
      title: "Counseling Center Intake Appointment",
      location: "Shoemaker Building",
      address: "",
      date: "February 1, 2021",
      img: require("../assets/doc-w-client.png"),
    },
    {
      id: 3,
      title: "Red Cross Blood Drive",
      location: "Student Government Association",
      address: "STAMP Grand Ballroom",
      date: "February 2, 2021",
      img: require("../assets/blood-drive.png"),
    },
  ];

  const Item = ({ title, location, address, date, img }) => (
    <View>
      <TouchableOpacity style={[styles.card, styles.shadowProp]}>
        <Image source={img} />
        <Text>{title}</Text>
        <Text>{location}</Text>
        <Text>{address}</Text>
        <Text>{date}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      location={item.location}
      address={item.address}
      date={item.date}
      img={item.img}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/blue-wave.png")} style={{ top: 0 }} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <TouchableOpacity
        style={styles.add_button}
        onPress={() => navigation.navigate("NewEvent")}
      >
        <Text style={styles.add_text}>Go to New Events Page!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 15,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 15,
    padding: 10,
    width: 300,
    borderStyle: "solid",
    borderRadius: 5,
    borderColor: "#605c6c",
    borderWidth: 1,
  },
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
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default EventScreen;
