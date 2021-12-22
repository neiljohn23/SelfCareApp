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
        color_block: {
          backgroundColor: "#F6A6A6",
          width: "12%",
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
    {
      id: 1,
      title: "Mental Health",
      description: "how do you think, feel or act?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#D2EDB0",
          width: 48,
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
    {
      id: 2,
      title: "Physical Health",
      description: "how does your body feel?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#D382B3",
          width: 48,
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
    {
      id: 3,
      title: "Nutrition",
      description: "are you eating and drinking well?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#95CCFF",
          width: 48,
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
    {
      id: 4,
      title: "Primary Care",
      description: "when was the last time you got a basic checkup?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#FBDC8E",
          width: 48,
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
    {
      id: 5,
      title: "Urgent Care",
      description: "can you wait more than 20 minutes to see a clinician?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#FFE4D8",
          width: 48,
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
  ];

  return (
    <View>
      {/* Sexual Health card */}
      <TouchableOpacity style={[styles.container, styles.shadowProp]}>
        <View style={DATA[0].card_style.color_block}></View>
        <View style={styles.container_text}>
          <Text style={styles.text_title}>{DATA[0].title}</Text>
          <Text style={styles.text_details}>{DATA[0].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Mental Health card */}
      <TouchableOpacity style={[styles.container, styles.shadowProp]}>
        <View style={DATA[1].card_style.color_block}></View>
        <View style={styles.container_text}>
          <Text style={styles.text_title}>{DATA[1].title}</Text>
          <Text style={styles.text_details}>{DATA[1].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Mental Health card */}
      <TouchableOpacity style={[styles.container, styles.shadowProp]}>
        <View style={DATA[2].card_style.color_block}></View>
        <View style={styles.container_text}>
          <Text style={styles.text_title}>{DATA[2].title}</Text>
          <Text style={styles.text_details}>{DATA[2].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Nutrition card */}
      <TouchableOpacity style={[styles.container, styles.shadowProp]}>
        <View style={DATA[3].card_style.color_block}></View>
        <View style={styles.container_text}>
          <Text style={styles.text_title}>{DATA[3].title}</Text>
          <Text style={styles.text_details}>{DATA[3].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Primary care card */}
      <TouchableOpacity style={[styles.container, styles.shadowProp]}>
        <View style={DATA[4].card_style.color_block}></View>
        <View style={styles.container_text}>
          <Text style={styles.text_title}>{DATA[4].title}</Text>
          <Text style={styles.text_details}>{DATA[4].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Urgent care card */}
      <TouchableOpacity style={[styles.container, styles.shadowProp]}>
        <View style={DATA[5].card_style.color_block}></View>
        <View style={styles.container_text}>
          <Text style={styles.text_title}>{DATA[5].title}</Text>
          <Text style={styles.text_details}>{DATA[5].description}</Text>
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
    marginHorizontal: 13,
    marginVertical: 10,
    width: "88%",
    height: "9.25%",
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    backgroundColor: "#FFF",
  },
  container_text: {
    paddingLeft: 12,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 4,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text_title: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 5,
  },
  text_details: {
    flexWrap: "wrap",
    color: "gray",
    marginBottom: 5,
    marginRight: 20,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

export default ExploreTopicsList;
