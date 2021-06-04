import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle} > Today's tasks </Text>
        
        <View style={styles.items} >
        {/*This is where the tasks will go! */}

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper : {},
sectionTitle : {},
items : {},
});
