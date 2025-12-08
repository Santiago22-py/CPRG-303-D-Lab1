import React, {useState} from 'react';
import { View, StyleSheet, Button } from 'react-native';

import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import Quote from '../components/Quote';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  // Function to add a new task
  const addTask = task => {
    // check for empty task
    if (!task) return;
    // add the new task to the list
    setTasks([...tasks, task]);
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Quote />

      <View style={styles.navButtons}>
        <Button title="About" onPress={() => navigation.navigate('About')} />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  navButtons: {
    marginTop: 50,
  },
});
