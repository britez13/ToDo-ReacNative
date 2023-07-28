import { useState } from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";

export default function TaskInput({onAddTask}) {
    const [task, setTask] = useState("");

    const addTaskHandler = () => {
        onAddTask(task)
        setTask("");
    }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={task}
        placeholder="Your task"
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
      },
})
