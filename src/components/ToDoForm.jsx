import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

// ToDoForm Component
export default function ToDoForm()
{   
    // Render the form to add new tasks
    return (
        <View style={styles.form}>
            <TextInput
                 style={styles.input}
                placeholder="Add a new task..."
            />
            <Button title="Add" />
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