import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text style = {styles.texto}>ECT 2025</Text>
      <StatusBar style="light" />
      <Image style = {styles.imagem} source = {require('./assets/imagens/teste1.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:
  {
    fontSize: 60,
    color:  '#a02'
  },
  imagem: {
    width: 250,
    height: 500
  }
  
});
