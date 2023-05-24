import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Text style={styles.H1}>Meus 10 FILMES FAVORITOS</Text>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/images/filme01.JPG')} style={styles.image} />
        <Image source={require('./assets/images/filme02.JPG')} style={styles.image} />
        <Image source={require('./assets/images/filme03.JPG')} style={styles.image} />
        <Image source={require('./assets/images/filme04.JPG')} style={styles.image} />
        <Image source={require('./assets/images/filme05.JPG')} style={styles.image} />
      </View>
      <View style={styles.contentContainer} />
      <Image source={require('./assets/images/filme06.JPG')} style={styles.image} />
      <Image source={require('./assets/images/filme07.JPG')} style={styles.image} />
      <Image source={require('./assets/images/filme08.JPG')} style={styles.image} />
      <Image source={require('./assets/images/filme09.JPG')} style={styles.image} />
      <Image source={require('./assets/images/filme10.JPG')} style={styles.image} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#fff'
  },
  image: {
    width: 300,
    height: 500,
    border: '3px solid black',
    borderRadius: 18,
    margin: 30,
  },
  contentContainer: {
    flex: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  H1: {
    color: 'white',
    fontSize: 49,
    textAlign: 'center',
    fontWeight: '900'


  }

});