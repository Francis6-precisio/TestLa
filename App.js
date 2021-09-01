import React from "react";
import { StyleSheet, View } from "react-native";
import CarList from "./src/components/molecules/carList";
import Header from "./src/components/atomes/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
