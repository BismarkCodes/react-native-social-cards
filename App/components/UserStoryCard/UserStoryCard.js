import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

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

const statusData = [
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

const UserStoryCard = (props) => {
  const renderItem = ({ item }) => (
    <Item imageUrl={item.url} userName={item.name} />
  );

  return (
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
        data={statusData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
      />
    </View>
  );
};

export default UserStoryCard;

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  cardTitleStyle: {
    fontSize: 14,
    color: "grey",
    marginBottom: 15,
  },
  itemListStyle: {
    flexDirection: "row",
    marginBottom: 10,
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
    marginBottom: 10,
  },
  itemImageStyle: {
    width: 60,
    height: 60,
    borderRadius: (60 / 2) * 100,
  },
  itemUserNameStyle: {
    color: "#333",
    fontWeight: "bold",
  },
});
