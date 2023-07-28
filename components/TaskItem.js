import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function TaskItem({itemData}) {
  return (
    <View style={styles.taskItem} key={itemData.item.id}>
      <Text style={styles.taskText}> {itemData.item.text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 8,
    margin: 8,
    backgroundColor: "purple",
    borderRadius: 8,
  },
  taskText: {
    color: "white",
  },
});
