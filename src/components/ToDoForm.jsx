import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

// ToDoForm Component
export default function ToDoForm({ addTask }) {
  // State to hold the current input value
  const [taskText, setTaskText] = React.useState('');

  // Function to handle adding a new task
  const handleAddTask = () => {
    addTask(taskText);
    setTaskText(''); // Clear the input field after adding
  };

  // Render the form to add new tasks
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={setTaskText}
        onSubmitEditing={handleAddTask}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
}

// Styles for the ToDoForm component
const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
