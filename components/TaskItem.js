import { View, StyleSheet, Text, Pressable } from "react-native";

export default function TaskItem({ itemData, onDeleteTask }) {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: "violet" }}
        onPress={onDeleteTask.bind(this, itemData.item.id)}
        key={itemData.item.id}
        style={({pressed}) => pressed && styles.pressItem}
      >
        <Text style={styles.taskText}> {itemData.item.text} </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    backgroundColor: "purple",
    borderRadius: 8,
  },
  pressItem: {
    opacity: 0.5
  },
  taskText: {
    color: "white",
    padding: 8,
  },
});
