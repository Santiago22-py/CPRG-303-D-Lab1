import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//Header Component
export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>CPRG 303 D - To Do List App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});