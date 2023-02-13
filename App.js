import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOLA CODERS!!</Text>
      <Text style={styles.text}>Otro Texto</Text>
      <StatusBar style="auto" />
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
  },
  title: {
    color: '#e74c4c',
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
  }
});
