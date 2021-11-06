import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatItem from "./ChatItem";

const ChatList = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>1. ChatList</Text>
        <ChatItem
          url={require("../assets/images/profile1.jpg")}
          name="Bismark Amanor"
          messageBrief="Last night was a blust"
        />
        <ChatItem
          url={require("../assets/images/profile2.jpg")}
          name="Quest"
          messageBrief="Hello 💓👋"
        />
        <ChatItem
          url={require("../assets/images/profile3.jpg")}
          name="Jacob Asafotei 💓"
          messageBrief="When are you showing up for the..."
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
    // borderWidth: 1,
    // borderColor: "#ccc",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  label: {
    color: "grey",
    fontSize: 15,
    marginVertical: 8,
  },
});
