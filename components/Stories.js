import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

export default function Stories(){
	const [stories, setStories] = useState();
	
	useEffect(function(){
		async function getData(){
			const response = await fetch('https://mobile.ect.ufrn.br:3000/stories');
			const storiesServidor = await response.json();
			setStories(storiesServidor); //obrigatoriamente deve se usar o setStories para modificar o storie
		}
		getData();
	},[])

function renderItem({item}){
	return <View style = {styles.story}> 
				<Image style= {styles.imgstory} source = {{uri: item.imgPerfilUri}}/>
				<Text> {item.nomeUsuario} </Text>
			</View>
}
	
	return(
		<View style = {styles.stories}> 
			<FlatList
				data = {stories}
				renderItem = {renderItem}
				keyExtractor = {item => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	
	);
	
}

const styles = StyleSheet.create({
 
  stories: {
    flexDirection: 'row',
    height: 90,
    backgroundColor:'#fff'
  },
  story: {
    height: 90,
    width: 90,
    backgroundColor:'#fff',
    alignItems: 'center'
  },
  imgstory: {
    height: 70,
    width: 70,
    borderRadius:35
  }
  
});
