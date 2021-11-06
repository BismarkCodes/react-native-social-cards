import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatItem from "./ChatItem";

const ChatList = (props) => {
  return (
    <SafeAreaView>
      <Text style={styles.label}>1. Simple ChatList</Text>
      <View style={styles.container}>
        <ChatItem
          imageUrl={require("../assets/images/profile1.jpg")}
          name="Bismark Amanor"
          messageBrief="Last night was a blust"
        />
        <ChatItem
          imageUrl={require("../assets/images/profile2.jpg")}
          name="Quest"
          messageBrief="Hello 💓👋"
        />
        <ChatItem
          userInitials="JA"
          name="Jacob Asafotei 💓"
          userLive={true}
          messageBrief="typing..."
        />
      </View>
      <Text style={[styles.label, styles.cardSeperator]}>
        2. Detailed ChatList
      </Text>
      <View style={styles.container}>
        <ChatItem
          imageUrl={require("../assets/images/profile2.jpg")}
          name="Bismark Amanor"
          userLive={true}
          messageBrief="Last night was a blust"
          messageTime="13 mins"
          newMessageCount={3}
        />
        <ChatItem
          userInitials="OB"
          name="Osmborn Blake"
          messageBrief="Hello 💓👋"
        />
        <ChatItem
          imageUrl={require("../assets/images/profile3.jpg")}
          name="MIA"
          userLive={true}
          messageBrief="typing..."
          messageTime="2 hrs"
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
    color: "#333",
    fontSize: 15,
    marginVertical: 8,
  },
  cardSeperator: {
    marginTop: 25,
  },
});
