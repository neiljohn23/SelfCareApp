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

const HealthcareList = () => {
  const DATA = [
    {
      id: "10",
      title: "Women's Health",
      img: require("../assets/my-healthcare-list/womens-health.png"),
    },
    {
      id: "11",
      title: "On-Campus Pharmacy Services",
      img: require("../assets/my-healthcare-list/pharmacy.png"),
    },
    {
      id: "12",
      title: "Primary Care Services",
      img: require("../assets/my-healthcare-list/primary-care.png"),
    },
    {
      id: "13",
      title: "Counseling Center Appointment",
      img: require("../assets/my-healthcare-list/counseling-center.png"),
    },
  ];

  /* Simply renders a pressable component with the title displayed */
  const Item = ({ title, img }) => (
    <TouchableOpacity style={[styles.container, styles.shadowProp]}>
      <Image
        source={img}
        style={{ resizeMode: "contain", height: 100, width: 200 }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item title={item.title} img={item.img} />;

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
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default HealthcareList;
