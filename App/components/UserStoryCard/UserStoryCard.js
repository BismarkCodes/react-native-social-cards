import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Item = ({ imageUrl, userName }) => {
  return (
    <View style={styles.itemStyle}>
      <View style={styles.itemImageContainerStyle}>
        <Image style={styles.itemImageStyle} source={imageUrl} />
      </View>
      {userName != null ? (
        <Text style={styles.itemUserNameStyle}>{userName}</Text>
      ) : null}
    </View>
  );
};

const storyData = [
  {
    id: 1,
    url: require("../../assets/images/profile2.jpg"),
    name: "Bismark",
  },
  {
    id: 2,
    url: require("../../assets/images/profile1.jpg"),
    name: "Kimberly",
  },
  {
    id: 3,
    url: require("../../assets/images/profile3.jpg"),
    name: "Rose",
  },
  {
    id: 4,
    url: require("../../assets/images/profile1.jpg"),
    name: "Mavis",
  },
  {
    id: 5,
    url: require("../../assets/images/profile3.jpg"),
    name: "Joseph",
  },
  {
    id: 6,
    url: require("../../assets/images/profile2.jpg"),
    name: "Sam",
  },
  {
    id: 7,
    url: require("../../assets/images/profile1.jpg"),
    name: "Kingsley",
  },
];

const miniStoryData = [
  {
    id: 1,
    url: require("../../assets/images/profile2.jpg"),
  },
  {
    id: 2,
    url: require("../../assets/images/profile1.jpg"),
  },
  {
    id: 3,
    url: require("../../assets/images/profile3.jpg"),
  },
  {
    id: 4,
    url: require("../../assets/images/profile1.jpg"),
  },
  {
    id: 5,
    url: require("../../assets/images/profile3.jpg"),
  },
  {
    id: 6,
    url: require("../../assets/images/profile2.jpg"),
  },
  {
    id: 7,
    url: require("../../assets/images/profile1.jpg"),
  },
];

const UserStoryCard = (props) => {
  const renderItem = ({ item }) => (
    <Item imageUrl={item.url} userName={item.name} />
  );

  return (
    <SafeAreaView>
      {/* simple userStoryCard without card title and username */}
      <Text style={styles.label}>1. Simple UserStoryCard</Text>
      <View style={styles.containerStyle}>
        <FlatList
          style={styles.itemListStyle}
          contentContainerStyle={{
            alignItems: "center",
          }}
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={miniStoryData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        />
      </View>
      {/* Complete user story card with card title and username */}
      <Text style={styles.label}>1. Simple UserStoryCard</Text>
      <View style={styles.containerStyle}>
        {props.cardTitle != null ? (
          <Text style={styles.cardTitleStyle}>{props.cardTitle}</Text>
        ) : null}
        <FlatList
          style={styles.itemListStyle}
          contentContainerStyle={{
            alignItems: "center",
          }}
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={storyData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserStoryCard;

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
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
  cardTitleStyle: {
    fontSize: 14,
    color: "grey",
    marginBottom: 15,
  },
  itemListStyle: {
    flexDirection: "row",
  },
  itemStyle: {
    alignItems: "center",
  },
  itemImageContainerStyle: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (64 / 2) * 100,
    borderWidth: 4,
    borderColor: "#00ff0080",
  },
  itemImageStyle: {
    width: 60,
    height: 60,
    borderRadius: (60 / 2) * 100,
  },
  itemUserNameStyle: {
    marginBottom: 10,
    marginTop: 10,
    color: "#333",
    fontWeight: "bold",
  },
});
