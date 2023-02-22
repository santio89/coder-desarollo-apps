import { Text, View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import Header from './components/Header.js';

export default function App() {
  const [items, setItems] = useState([])

  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={items} 
        renderItem={item=> (
        <Text>{item.text}</Text>
      )} 
      keyExtractor={item => item.id}
      />
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
    padding: 30
  },
  inputContainer: {
    color: '#e74c4c',
    fontWeight: 'bold',
    padding: 10
  },
  itemsContainer: {
    color: '#e74c4c',
    fontWeight: 'bold',
    padding: 10
  }
});
