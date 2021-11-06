import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ChatItem2 = (props) => {
  return (
    <View style={styles.itemCardContainer}>
      {props.url == null ? (
        <View style={styles.imageContainer}>
          <Text style={styles.userInitials}>{props.userInitials}</Text>
        </View>
      ) : (
        <Image style={styles.image} source={props.url} resizeMode="cover" />
      )}

      <View style={styles.rightContent}>
        <View style={[styles.section, styles.sectionSeperator]}>
          <Text style={styles.personName}>{props.name}</Text>
          {props.messageTime == null ? null : (
            <Text style={styles.msgTime}>{props.messageTime}</Text>
          )}
        </View>
        <View style={styles.section}>
          <Text style={styles.messageBrief}>{props.messageBrief}</Text>
          {props.newMessageCount == null ? null : (
            <Text style={styles.newMsgCount}>{props.newMessageCount}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ChatItem2;

const styles = StyleSheet.create({
  itemCardContainer: {
    flexDirection: "row",
    alignItems: "center",

    // paddingVertical: 10,
    // backgroundColor: "yellow",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: (60 / 2) * 100,
    backgroundColor: "#0000ff20",
    marginRight: 15,
    justifyContent: "center",
  },
  userInitials: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#0000ff",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: (60 / 2) * 100,
    marginRight: 15,
  },
  rightContent: {
    flex: 1,
    borderBottomColor: "#cccccc60",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionSeperator: {
    marginBottom: 3,
  },
  personName: {
    fontSize: 15,
    color: "#333",
    fontWeight: "bold",
  },
  msgTime: {
    fontWeight: "normal",
    fontSize: 12,
    color: "grey",
  },
  messageBrief: {
    color: "grey",
    fontSize: 13,
  },
  newMsgCount: {
    borderRadius: 20,
    color: "#fff",
    backgroundColor: "red",
    fontSize: 12,
    height: 18,
    minWidth: 20,
    textAlign: "center",
  },
});
