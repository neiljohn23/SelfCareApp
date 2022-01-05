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

const UrgentCareList = () => {
  const DATA = [
    {
      id: "20",
      title: "Sutter Health",
      img: require("../assets/urgent-cares/sutter.png"),
      distance: 2.1,
    },
    {
      id: "21",
      title: "Carbon",
      img: require("../assets/urgent-cares/carbon.png"),
      distance: 1.6,
    },
    {
      id: "22",
      title: "Mayo Clinic",
      img: require("../assets/urgent-cares/mayo.png"),
      distance: 13.2,
    },
  ];

  /* Simply renders a pressable component with the title displayed */
  const Item = ({ title, img, distance }) => (
    <View>
      <TouchableOpacity style={[styles.container, styles.shadowProp]}>
        <View style={{ flexDirection: "row" }}>
          <Image source={img} />
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ left: 160, marginTop: 5 }}>
        <Text>{distance} miles away</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} distance={item.distance} />
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
    padding: 10,
    width: 250,
    height: 100,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    backgroundColor: "#ffe4dc",
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

export default UrgentCareList;
