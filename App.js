import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasksList, setTasksList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddTaskHandler() {
    setModalIsVisible(true)
  }

  function endAddTaskHandler() {
    setModalIsVisible(false)
  }

  function addTaskHandler(enteredText) {
    setTasksList((prevState) => {
      return [...prevState, { text: enteredText, id: Math.random() * 100 }];
    });
    endAddTaskHandler()
  }

  function deleteTaskHandler(id) {
    setTasksList((prevState) => prevState.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add new task" color="purple" onPress={startAddTaskHandler} />
      <TaskInput onAddTask={addTaskHandler} showModal={modalIsVisible} onCloseModal={endAddTaskHandler} />
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasksList}
          renderItem={(itemData) => <TaskItem itemData={itemData} onDeleteTask={deleteTaskHandler} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 26,
  },
  tasksContainer: {
    flex: 5,
  },
});
