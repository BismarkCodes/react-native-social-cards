import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatList from "./components/Chatlist/ChatList";
import UserStoryCard from "./components/UserStoryCard/UserStoryCard";

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
          <ActivityIndicator color="#ccc" size="large" />
        ) : (
          <>
            <Text style={styles.sectionTitle}>#ChatList</Text>
            <View style={styles.container}>
              <ChatList />
            </View>

            <Text style={styles.sectionTitle}>#UserStoryCard</Text>
            <View style={styles.container}>
              <UserStoryCard cardTitle="Stories" />
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
});
