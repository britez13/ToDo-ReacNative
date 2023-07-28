import { useState } from "react";
import { Button, TextInput, StyleSheet, View, Modal } from "react-native";

export default function TaskInput({ onAddTask, showModal, onCloseModal }) {
  const [task, setTask] = useState("");

  const addTaskHandler = () => {
    onAddTask(task);
    setTask("");
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={task}
          placeholder="Your task"
          onChangeText={(text) => setTask(text)}
        />
        <View style={styles.buttonsContaiener}>
          <Button title="Add Task" onPress={addTaskHandler} />
          <Button title="Cancel" onPress={onCloseModal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
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
  buttonsContaiener: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8
  }
});
