/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native'; //Made it a single line since there is only one import

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';


function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
