import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const EducationList = () => {
  const DATA = [
    {
      id: "0",
      title:
        "A Guide for Transgender, Non-Binary, and Gender Non-Conforming Terps",
      group: "University Health Center",
      card_style: StyleSheet.create({
        container: {
          marginHorizontal: 10,
          marginBottom: 10,
          marginTop: 20,
          left: 8,
          width: 200,
          height: 170,
          borderStyle: "solid",
          borderRadius: 10,
          borderColor: "#F0F2F4",
          borderWidth: 1,
          backgroundColor: "#489c6c",
          padding: 7,
        },
        container_title: {
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 8,
        },
        container_group: {
          justifyContent: "flex-end",
          alignItems: "flex-end",
          textAlign: "right",
          padding: 8,
          flexWrap: "wrap",
        },
        text_title: {
          color: "white",
          fontSize: 17,
          fontWeight: "bold",
          flexWrap: "wrap",
        },
        text_group: {
          color: "white",
          flexWrap: "wrap",
          textAlign: "right",
        },
      }),
    },
    {
      id: "1",
      title: "Wellness Toolkit",
      group: "University Health Center",
      img: require("../assets/education-list/orange-rectangle.png"),
      card_style: StyleSheet.create({
        container: {
          marginHorizontal: 10,
          marginBottom: 10,
          marginTop: 20,
          left: 8,
          width: 200,
          height: 170,
          borderStyle: "solid",
          borderRadius: 10,
          borderColor: "#F0F2F4",
          borderWidth: 1,
          backgroundColor: "#DD6C48",
          padding: 8,
        },
        container_title: {
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 8,
        },
        container_group: {
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          textAlign: "right",
          padding: 8,
        },
        text_title: {
          color: "white",
          fontSize: 17,
          fontWeight: "bold",
          flexWrap: "wrap",
        },
        text_group: {
          color: "white",
          flexWrap: "wrap",
          textAlign: "right",
        },
      }),
    },
    {
      id: "2",
      title: "Healthy Terps Newsletter: October",
      group: "Student Health Advisory Committee",
      img: require("../assets/education-list/blue-rectangle.png"),
      card_style: StyleSheet.create({
        container: {
          marginHorizontal: 10,
          marginBottom: 10,
          marginTop: 20,
          left: 8,
          width: 200,
          height: 170,
          borderStyle: "solid",
          borderRadius: 10,
          borderColor: "#F0F2F4",
          borderWidth: 1,
          backgroundColor: "#044468",
          padding: 8,
        },
        container_title: {
          flex: 2,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 8,
        },
        container_group: {
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          padding: 8,
        },
        text_title: {
          color: "white",
          fontSize: 17,
          fontWeight: "bold",
          flexWrap: "wrap",
        },
        text_group: {
          color: "white",
          flexWrap: "wrap",
          textAlign: "right",
        },
      }),
    },
  ];

  /* Simply renders a pressable component with the title displayed */
  const Item = ({ title, group, card_style }) => (
    <TouchableOpacity style={[card_style.container, styles.shadowProp]}>
      <View style={card_style.container_title}>
        <Text style={card_style.text_title}>{title}</Text>
      </View>
      <View style={card_style.container_group}>
        <Text style={card_style.text_group}>{group}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} group={item.group} card_style={item.card_style} />
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
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    left: 8,
    width: 172,
    height: 145,
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
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default EducationList;
