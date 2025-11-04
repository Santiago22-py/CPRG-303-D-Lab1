import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';

// ToDoList Component
export default function ToDoList()
{   
    // Render the list of tasks
    return (
        
        <ScrollView> {/* Scrollable list of tasks */}
            {/* Task 1 */}
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Do laundry</Text>
                </View>
            </Pressable>
        
            {/* Task 2 */}
            <Pressable>
                <View style={[styles.task]}>
                    <Text style={styles.taskText}>Go to gym</Text>
                </View>
            </Pressable>

            {/* Task 3 */}
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Walk dog</Text>
                </View>
            </Pressable>
        </ScrollView>
    );
}   
    // Styles for the ToDoList component
    const styles = StyleSheet.create
    ({
        task: 
        {
            padding: 10,
            borderBottomWidth: 1,
            borderColor: '#ccc',
        },
        completed: 
        {
            backgroundColor: '#e0e0e0',
        },
        taskText: 
        {
            fontSize: 16,
        },
    });