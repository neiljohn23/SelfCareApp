import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";

const EventScreen = ({ navigation }) => {
  {
    /* Array of event data that is passed to the FlatList */
  }
  const EVENT_DATA = [
    {
      id: 0,
      title: "Biking for Beginners",
      location: "UMD RecWell",
      address: "Bike Shop, Cole #0249",
      date: "January 29, 2021",
      img: require("../assets/woman-on-bike.png"),
      virtual: false,
    },
    {
      id: 1,
      title: "Counseling Center Peer-Support Group",
      location: "UMD Counseling Center",
      address: "ONLINE",
      date: "January 30, 2021",
      img: require("../assets/coin-jar.png"),
      virtual: true,
    },
    {
      id: 2,
      title: "Counseling Center Intake Appointment",
      location: "Shoemaker Building",
      address: "",
      date: "February 1, 2021",
      img: require("../assets/doc-w-client.png"),
      virtual: false,
    },
    {
      id: 3,
      title: "Red Cross Blood Drive",
      location: "Student Government Association",
      address: "STAMP Grand Ballroom",
      date: "February 2, 2021",
      img: require("../assets/blood-drive.png"),
      virtual: false,
    },
  ];

  {
    /* Component for small purple banner that reads "VIRTUAL". 
       Will be rendered based on the 'virtual' field.
       DOES NOT WORK YET */
  }
  const VirtualIcon = () => {
    return (
      <View style={virtualIcon}>
        <Text style={{ fontWeight: "bold" }}>VIRTUAL</Text>
      </View>
    );
  };

  {
    /* Decides whether or not the virtual banner will be displayed. 
      DOES NOT WORK YET*/
  }
  function DisplayVirtual({ virtual }) {
    if (virtual) {
      return <VirtualIcon />;
    }
    return <></>;
  }

  {
    /* This is the component that is repeated. Props (data from EVENT_DATA) from 
       renderItem are passed in, and this function will use those props to render
       the image and text to be found in the repeated event card. */
  }
  const Item = ({ title, location, address, date, img, virtual }) => (
    <View>
      <TouchableOpacity style={[styles.card, styles.shadowProp]}>
        <Image source={img} />
        <DisplayVirtual isVirtual={virtual} />
        <Text>{title}</Text>
        <Text>{location}</Text>
        <Text>{address}</Text>
        <Text>{date}</Text>
      </TouchableOpacity>
    </View>
  );

  {
    /* renderItem is called from the FlatList component. It uses data from EVENT_DATA
       to create props which are to be passed into and used by the Item component.   */
  }
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      location={item.location}
      address={item.address}
      date={item.date}
      img={item.img}
      virtual={item.virtual}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Blue swoosh at the top of the page */}
      <Image
        source={require("../assets/blue-wave.png")}
        resizeMode="stretch"
        style={{ width: "100%" }}
      />

      <View style={{ top: -50 }}>
        <Text style={{ fontSize: 20 }}>EVENTS</Text>
      </View>

      {/* List of events to be rendered */}
      <FlatList
        data={EVENT_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <TouchableOpacity
        style={styles.add_button}
        onPress={() => navigation.navigate("NewEvent")}
      >
        <Text style={styles.add_text}>Add an Event</Text>
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
    backgroundColor: "#fff",
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
    borderRadius: 15,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    backgroundColor: "#F0F2F4",
    backgroundColor: "#fff",
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
    height: 50,
    margin: 15,
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
    shadowRadius: 5,
  },
  virtualIcon: {
    backgroundColor: "#b08ce4",
  },
});

export default EventScreen;
