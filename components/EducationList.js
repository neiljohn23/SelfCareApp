import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

const EducationList = () => {
  const DATA = [
    {
      id: "00",
      title:
        "A Guide for Transgender, Non-Binary, and Gender Non-Conforming Terps",
      group: "University Health Center",
      img: require("../assets/education-list/green-rectangle.png"),
    },
    {
      id: "01",
      title: "Wellness Toolkit",
      group: "University Health Center",
      img: require("../assets/education-list/orange-rectangle.png"),
    },
    {
      id: "02",
      title: "Healthy Terps Newsletter: October",
      group: "Student Health Advisory Committee",
      img: require("../assets/education-list/blue-rectangle.png"),
    },
  ];

  /* Simply renders a pressable component with the title displayed */
  const Item = ({ title, group, img }) => (
    <TouchableOpacity style={[styles.container, styles.shadowProp]}>
      <View>
        <ImageBackground source={img} style={{ width: "102%", height: "102%" }}>
          <Text>{title}</Text>
          <Text>{group}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} group={item.group} img={item.img} />
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
