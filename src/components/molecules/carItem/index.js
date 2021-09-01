import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Buttons from "../../atomes/buttons";
import styles from "./styles";

export default function CarItem(props) {
  const { name, taggline, tagglineCTA, image } = props.car;
  //console.warn(props.car);

  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {taggline} <Text style={styles.subtitleCTA}>{tagglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
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
    </View>
  );
}
