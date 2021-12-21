import React, { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";

var messageNumber = 0;

const BotScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Welcome to Chat Health!",

        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/robot.png"),
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const sampleMessages = [
      {
        _id: 6,
        text: "Hi, My name is Beta. Welcome to Chat Health. I’m a chatbot that can answer questions about your health. Before we start, do you need emergency health attention?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/robot.png"),
        },
      },
      {
        _id: 2,
        text: "Okay. Just so you know, Chat Health is not a diagnostic tool, and cannot replace proper diagnosis by a medical professional.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/robot.png"),
        },
      },
      {
        _id: 3,
        text: "Before you fill out your profile, please be aware that all your data is kept confidential and anonymous. Your privacy is our priority.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/robot.png"),
        },
      },
      {
        _id: 4,
        text: "Great. Next, what should I call you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/robot.png"),
        },
      },
      {
        _id: 5,
        text: "What language would you like the app to be in?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/robot.png"),
        },
      },
      {
        _id: 7,
        text: "I ran out of brain!!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/robot.png"),
        },
      },
      {
        _id: 8,
        text: "I ran out of brain!!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/robot.png"),
        },
      },
      {
        _id: 9,
        text: "I ran out of brain!!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/robot.png"),
        },
      },
    ];

    var response = "I ran out of brain!!";

    if (messageNumber < 8) {
      response = sampleMessages[messageNumber];
    }

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, response)
    );

    messageNumber++;
  }, []);

  /* Trying hard af to put the text at the bottom of the bubble
     and have the two buttons side by side */
  const renderCustomView = (props) => {
    return (
      <View
        style={{
          float: "left",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      ></View>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#d2edb1",
          },
          right: {
            backgroundColor: "#5EC9FF",
          },
        }}
        textStyle={{
          alignSelf: "flex-start",
          left: {
            color: "#000",
          },
          right: {
            color: "#000",
          },
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderCustomView={renderCustomView}
      />
    </View>
  );
};

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  bubble_context: {
    flex: 1,
  },

  bubble_button: {
    flex: 2,
    alignSelf: "flex-end",
  },
});
*/

export default BotScreen;
