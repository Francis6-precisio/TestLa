import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Buttons from "../../atomes/buttons";
import styles from "./styles";

export default function CarItem(props) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/images/ModelX.jpeg")}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <Buttons
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.warn("Custom Order was pressed");
        }}
      />
      <Buttons
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory was pressed");
        }}
      />
    </View>
  );
}
