import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from '../styles/Constants';

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
    backgroundColor: Constants.colorPrimary,
    padding: 8,
    width: Dimensions.get('window').width,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomColor: Constants.colorWhite,
    borderBottomWidth: 2,
  },

  header: {
    color: Constants.colorWhite,
    fontSize: Constants.fontLg,
    fontWeight: 'bold',
    fontFamily: Constants.fontPrimaryBold,
  }
});
