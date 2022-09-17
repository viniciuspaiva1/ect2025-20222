import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

import Header from './components/Header';
import Stories from './components/Stories';
import Feed from './components/Feed';

export default function App() {
  return (
<View style={styles.container}>
		<StatusBar style="light" />
        <Header/>
		<Stories/>
		<Feed/>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  
  
});
