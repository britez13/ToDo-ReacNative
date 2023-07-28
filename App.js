import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasksList, setTasksList] = useState([]);

  function addTaskHandler(enteredText) {
    setTasksList((prevState) => {
      return [...prevState, { text: enteredText, id: Math.random() * 100 }];
    });
  }

  return (
    <View style={styles.appContainer}>
      <TaskInput onAddTask={addTaskHandler} />
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasksList}
          renderItem={(itemData) => (
            <TaskItem itemData={itemData} />
          )}
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
  }
});
