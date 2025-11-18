import React from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

// ToDoList Component
export default function ToDoList({ tasks }) {
  // Render the list of tasks
  return (
    <ScrollView>{tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
// Styles for the ToDoList component
const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});
