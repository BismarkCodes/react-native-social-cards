import { EvilIcons, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UserPostCard = ({
  profileImage,
  postImage,
  username,
  postTime,
  active,
  title,
  description,
}) => {
  return (
    //   container
    <View style={styles.containerStyle}>
      {/* card top for user details and time of posting */}
      <View style={styles.cardTopStyle}>
        {/* profile image container*/}
        <View style={styles.userImageContainerStyle}>
          {profileImage == null ? (
            <Fontisto name="apple" size={30} color="#333" />
          ) : (
            <>{profileImage}</>
          )}
        </View>
        {/* user details */}
        <View style={styles.userDetailStyle}>
          {/* username and time of post */}
          <View>
            <Text style={styles.usernameStyle}>{username}</Text>
            <Text style={styles.timeOfPostStyle}>{postTime}</Text>
          </View>
          {/* active status */}
          <FontAwesome
            name="circle"
            size={12}
            color={active ? "#8EE98E" : "#17171750"}
          />
        </View>
      </View>
      {/* card middle for image and or title */}
      <View>
        {postImage == null ? null : (
          <View style={{ flex: 1, height: 150 }}>{postImage}</View>
        )}
        {/* post description section */}
        <View style={styles.postDescriptionStyle}>
          {postImage == null ? (
            <>
              <Text style={styles.titleStyle} numberOfLines={2}>
                {title}
              </Text>
              <Text style={styles.descriptionStyle} numberOfLines={3}>
                {description}
              </Text>
            </>
          ) : (
            <Text style={styles.titleStyle} numberOfLines={2}>
              {title}
            </Text>
          )}
        </View>
      </View>
      {/* card bottom for post interaction icons */}
      <View style={styles.iconsContainerStyle}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 30,
              }}
            >
              <Ionicons name="md-heart-outline" size={24} color="#333" />
              <Text style={{ fontSize: 13, marginLeft: 8 }}>123</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 35,
              }}
            >
              <EvilIcons name="comment" size={28} color="#333" />
              <Text style={{ fontSize: 13, marginLeft: 6 }}>123</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <EvilIcons name="share-google" size={30} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserPostCard;

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 0,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  cardTopStyle: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  userDetailStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userImageContainerStyle: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 15,
  },
  userImageStyle: {},
  usernameStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  timeOfPostStyle: {
    marginTop: 3,
    fontSize: 12,
    color: "#17171780",
  },
  //   card middle styles
  postDescriptionStyle: {
    padding: 15,
  },
  titleStyle: {
    paddingBottom: 8,
    fontWeight: "bold",
    fontSize: 18,
  },
  descriptionStyle: {
    fontSize: 15,
    color: "#333333",
    lineHeight: 22,
    marginTop: 10,
  },

  //   card bottom styles
  iconsContainerStyle: {
    marginHorizontal: 15,
    marginTop: 2,
    paddingVertical: 15,
    borderTopColor: "#17171715",
    borderTopWidth: 1,
  },
});
