import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  VirtualizedList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ExploreTopicsList = () => {
  const DATA = [
    {
      id: 0,
      title: "Sexual Health",
      description:
        "is your reproductive system healthy and are you having positive sexual experiences?",
      card_style: StyleSheet.create({
        container: {
          left: 8,
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          margin: 15,
          padding: 10,
          width: 300,
          borderStyle: "solid",
          borderRadius: 15,
          borderColor: "#F0F2F4",
          borderWidth: 1,
          backgroundColor: "#F0F2F4",
          backgroundColor: "#fff",
        },
        color_block: {
          color: "#F6A6A6",
          flex: 1,
        },
        text_block: {
          flex: 9,
        },
      }),
    },
    {
      id: 1,
      title: "Mental Health",
      description: "how do you think, feel or act?",
      card_style: StyleSheet.create({
        color_block: {
          color: "#D2EDB0",
          flex: 1,
        },
        text_block: {
          flex: 9,
        },
      }),
    },
    {
      id: 2,
      title: "Physical Health",
      description: "how does your body feel?",
      card_style: StyleSheet.create({
        color_block: {
          color: "#D382B3",
          flex: 1,
        },
        text_block: {
          flex: 9,
        },
      }),
    },
    {
      id: 3,
      title: "Nutrition",
      description: "are you eating and drinking well?",
      card_style: StyleSheet.create({
        color_block: {
          color: "#95CCFF",
          flex: 1,
        },
        text_block: {
          flex: 9,
        },
      }),
    },
    {
      id: 4,
      title: "Primary Care",
      description: "when was the last time you got a basic checkup?",
      card_style: StyleSheet.create({
        color_block: {
          color: "#FBDC8E",
          flex: 1,
        },
        text_block: {
          flex: 9,
        },
      }),
    },
    {
      id: 5,
      title: "Urgent Care",
      description: "can you wait more than 20 minutes to see a clinician?",
      card_style: StyleSheet.create({
        color_block: {
          color: "#FFE4D8",
          flex: 1,
        },
        text_block: {
          flex: 9,
        },
      }),
    },
  ];

  return (
    <View>
      {/* Sexual Health card */}
      <TouchableOpacity style={styles.container}>
        <View
          style={{
            backgroundColor: "#F6A6A6",
            width: "9%",
            height: "100%",
            borderColor: "#F0F2F4",
            borderStyle: "solid",
            borderTopRadiusLeft: 30,
            borderBottomRadiusLeft: 30,
          }}
        ></View>
        <View style={{ padding: 12 }}>
          <Text
            style={{
              fontWeight: "bold",
              alignSelf: "flex-start",
              marginTop: 10,
            }}
          >
            {DATA[0].title}
          </Text>
          <Text
            style={{
              flexWrap: "wrap",
              color: "gray",
              marginVertical: 10,
              marginRight: 4,
            }}
          >
            {DATA[0].description}
          </Text>
        </View>
      </TouchableOpacity>
      {/* Mental Health card */}
      <TouchableOpacity style={styles.container}>
        <View style={{ backgroundColor: "#D2EDB0", flex: 1 }}></View>
        <View style={{ flex: 9 }}>
          <Text style={{ fontWeight: "bold" }}>{DATA[1].title}</Text>
          <Text style={{ flexWrap: "wrap" }}>{DATA[1].description}</Text>
        </View>
      </TouchableOpacity>
      {/* Mental Health card */}
      <TouchableOpacity style={styles.container}>
        <View style={{ backgroundColor: "#D382B3", flex: 1 }}></View>
        <View style={{ flex: 9 }}>
          <Text style={{ fontWeight: "bold" }}>{DATA[2].title}</Text>
          <Text style={{ flexWrap: "wrap" }}>{DATA[2].description}</Text>
        </View>
      </TouchableOpacity>
      {/* Nutrition card */}
      <TouchableOpacity style={styles.container}>
        <View style={{ backgroundColor: "#95CCFF", flex: 1 }}></View>
        <View style={{ flex: 9 }}>
          <Text style={{ fontWeight: "bold" }}>{DATA[3].title}</Text>
          <Text style={{ flexWrap: "wrap" }}>{DATA[3].description}</Text>
        </View>
      </TouchableOpacity>
      {/* Primary care card */}
      <TouchableOpacity style={styles.container}>
        <View style={{ backgroundColor: "#FBDC8E", flex: 1 }}></View>
        <View style={{ flex: 9 }}>
          <Text style={{ fontWeight: "bold" }}>{DATA[4].title}</Text>
          <Text style={{ flexWrap: "wrap" }}>{DATA[4].description}</Text>
        </View>
      </TouchableOpacity>
      {/* Urgent care card */}
      <TouchableOpacity style={styles.container}>
        <View style={{ backgroundColor: "#FBDC8E", flex: 1 }}></View>
        <View style={{ flex: 9 }}>
          <Text style={{ fontWeight: "bold" }}>{DATA[5].title}</Text>
          <Text style={{ flexWrap: "wrap" }}>{DATA[5].description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 7,
    left: 8,
    width: "90%",
    height: 80,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    backgroundColor: "#FFF",
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
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

export default ExploreTopicsList;
