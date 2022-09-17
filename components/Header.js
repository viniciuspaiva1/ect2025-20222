import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header(){
	return(
	<View style = {styles.header}>
		<Image style={styles.ufrngram} source = {require('../assets/imagens/ufrngram.png')}/>
		<FontAwesome5 name = "paper-plane" size = {24} color = "black"></FontAwesome5>
    </View>
	
	);
	
}
const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ufrngram: {
    height: 25,
    width:110,
  }  
  
});