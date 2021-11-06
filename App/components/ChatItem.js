import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ChatItem = (props) => {
  return (
    <View style={styles.itemCardContainer}>
      <Image style={styles.image} source={props.url} resizeMode="cover" />
      <View style={styles.rightContent}>
        <Text style={styles.personName}>{props.name}</Text>
        <Text style={styles.messageBrief}>{props.messageBrief}</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  itemCardContainer: {
    flexDirection: "row",
    alignItems: "center",

    // paddingVertical: 10,
    // backgroundColor: "yellow",
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: (60 / 2) * 100,
    backgroundColor: "yellow",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: (60 / 2) * 100,
    marginRight: 15,
  },
  rightContent: {
    flex: 1,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  personName: {
    fontSize: 15,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 3,
  },
  messageBrief: {
    color: "grey",
    fontSize: 13,
  },
});
