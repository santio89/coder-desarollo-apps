import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button } from 'react-native';
import styles from './styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Item a agregar' />
        <Button title='Agregar'/>
      </View>
      <View style={styles.itemsContainer}>  
        <Text>Item</Text>
        <Text>Item</Text>
        <Text>Item</Text>
        <Text>Item</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

