import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Header from './components/Header.js';
import ToDoList from './components/ToDoList.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <ToDoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    padding: 20
  }
});
