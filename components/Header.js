import { Text, View, StyleSheet, Dimensions } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>TO DO LIST</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'slateblue',
    padding: 10,
    width: Dimensions.get('window').width,
    textAlign: 'center',
    marginBottom: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },

  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
