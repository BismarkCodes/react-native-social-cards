import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatList from "./components/Chatlist/ChatList";
import UserPostCard from "./components/UserPostCard/UserPostCard";
import StoriesCard from "./components/StoriesCard/StoriesCard";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>React-Native-Social-Cards 🥇💟</Text>
      <Text style={styles.byMe}>by @bismarkamanor</Text>
      <ScrollView>
        {isLoading === true ? (
          <ActivityIndicator
            style={{ marginTop: Dimensions.get("window").height * 0.5 }}
            color="#ccc"
            size="large"
          />
        ) : (
          <>
            {/* chatlist card */}
            <Text style={styles.sectionTitle}>#ChatList</Text>
            <View style={styles.container}>
              <ChatList />
            </View>
            {/* user story card */}
            <Text style={styles.sectionTitle}>#StoriesCard</Text>
            <View style={styles.container}>
              <StoriesCard cardTitle="Stories" />
            </View>
            {/* User Post Card */}
            <Text style={styles.sectionTitle}>#UserPostCard</Text>
            <Text style={[styles.label, { marginTop: 15 }]}>
              1. Simple UserPostCard
            </Text>
            <View style={[styles.container, { paddingTop: 0 }]}>
              <UserPostCard
                username="Apple Technologies"
                postTime="Today @2:30 pm"
                title="What's new about the M1 chip for this year"
                description="M1 Pro has an up-to-16-core GPU that is up to 2x faster than M1 and up to 7x faster than the integrated graphics on the latest 8-core PC laptop chip. 1 Compared to a powerful discrete GPU for PC notebooks, M1 Pro delivers more performance while using up to 70 percent less power. "
              />
            </View>
            <Text style={styles.label}>2. Complete UserPostCard</Text>
            <View style={[styles.container, { paddingTop: 0 }]}>
              <UserPostCard
                active={true}
                profileImage={
                  <Image
                    style={{
                      flex: 1,
                      height: "100%",
                      width: "100%",
                      borderRadius: 50,
                    }}
                    source={require("./assets/images/profile3.jpg")}
                    resizeMode="cover"
                  />
                }
                postImage={
                  <Image
                    style={{ flex: 1, height: "100%", width: "100%" }}
                    source={require("./assets/images/profile1.jpg")}
                    resizeMode="cover"
                  />
                }
                username="Gia May"
                postTime="Yesterday @4:30 am"
                title="10 Reasons why you have to take care of your skin every night before you go to bed"
                description="M1 Pro has an up-to-16-core GPU that is up to 2x faster than M1 and up to 7x faster than the integrated graphics on the latest 8-core PC laptop chip. 1 Compared to a powerful discrete GPU for PC notebooks, M1 Pro delivers more performance while using up to 70 percent less power. "
              />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    marginHorizontal: 20,
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  byMe: {
    fontSize: 14,
    color: "grey",
    marginVertical: 10,
    marginHorizontal: 20,
    marginTop: 5,
  },
  sectionTitle: {
    marginVertical: 20,
    marginHorizontal: 20,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: "bold",
    color: "#0000ff",
  },
  label: {
    color: "#333",
    fontSize: 15,
    marginVertical: 8,
    marginHorizontal: 20,
  },
});
