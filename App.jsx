/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView,} from 'react-native'; //Made it a single line since there is only one import
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';
import Quote from './src/components/Quote'; // Quote component for lab 4

function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Function to add a new task
  const addTask = (task) =>
  {
    // check for empty task
    if (!task) return;
    // add the new task to the list
    setTasks([...tasks, task]);
  }

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask}/>
      <Quote /> 
    </SafeAreaView>
  );
}

export default App;
