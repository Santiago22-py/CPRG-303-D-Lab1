import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Footer Component
export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2025 - Joao Santiago</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
});