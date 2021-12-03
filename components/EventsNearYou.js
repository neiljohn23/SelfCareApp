import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const EventsNearYou = () => {
  const DATA = [
    {
      id: "30",
      title: "STI Testing",
      img: require("../assets/events-near-you/sti.png"),
      date: "06/20",
    },
    {
      id: "31",
      title: "Blood Drive",
      img: require("../assets/events-near-you/blood2.png"),
      date: "07/31",
    },
    {
      id: "32",
      title: "Mental Health Peer Support Group",
      img: require("../assets/events-near-you/mental.png"),
      date: "08/01",
    },
  ];

  /* Simply renders a pressable component with the title displayed */
  const Item = ({ title, img, date }) => (
    <TouchableOpacity style={[styles.container, styles.shadowProp]}>
      <Text>{date}</Text>
      <Image
        source={img}
        style={{ resizeMode: "contain", height: 80, width: 200 }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} date={item.date} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    left: 8,
    padding: 10,
    width: 200,
    height: 200,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 20,
    fontSize: 15,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default EventsNearYou;
