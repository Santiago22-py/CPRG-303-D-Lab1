import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({ navigation }) {
  //Get todays date
  const today = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About This App</Text>
        <Text style={styles.text}>
          This the the ToDo List app developed for the CPRG 303 Section D Class
          this app has been developed in "Sprints"m with each lab assignment
          adding something to it
        </Text>
        <Text style={styles.text}>Developer: Joao Santiago</Text>
        <Text style={styles.text}>Date: {today}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Back to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  buttonContainer: {
    marginTop: 200,
  },
});
