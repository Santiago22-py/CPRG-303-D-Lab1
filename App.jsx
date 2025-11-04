/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView,} from 'react-native'; //Made it a single line since there is only one import
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
