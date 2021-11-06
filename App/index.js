import React from "react";
import {
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatList from "./components/ChatList";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>React-Native-Social-Cards 🥇💟</Text>
      <Text style={styles.byMe}>by @bismarkamanor</Text>
      <ScrollView>
        <Text style={styles.sectionTitle}>#ChatList</Text>
        <View style={styles.container}>
          <ChatList />
        </View>
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
