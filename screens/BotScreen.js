import React, { useState, useEffect, useCallback } from "react";
import { Text, View, Button } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";

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
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  /* Trying hard af to put the text at the bottom of the bubble
     and have the two buttons side by side */
  const renderCustomView = (props) => {
    return (
      <View style={{ float: "left", display: "inline" }}>
        <Button title="option1" />
        <Button title="option2" />
      </View>
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
            backgroundColor: "#e4f3fb",
          },
        }}
        textStyle={{
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
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      renderCustomView={renderCustomView}
    />
  );
};

export default BotScreen;
