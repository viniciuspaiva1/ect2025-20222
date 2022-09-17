import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

export default function Stories(){
	const stories = [
		{
			id: 1,
			nome: 'Perna',
			src: require('../assets/imagens/teste1.png'),
		},
		{
			id: 2,
			nome: 'Patolino',
			src: require('../assets/imagens/patolino1.jpg'),
		},
		{
			id: 3,
			nome: 'Perna',
			src: require('../assets/imagens/teste1.png'),
		},
		{
			id: 4,
			nome: 'Patolino',
			src: require('../assets/imagens/patolino1.jpg'),
		},
		{
			id: 5,
			nome: 'Perna',
			src: require('../assets/imagens/teste1.png'),
		},
		
	];

function renderItem({item}){
	return <View style = {styles.story}> 
				<Image style= {styles.imgstory} source = {item.src}/>
				<Text> {item.nome} </Text>
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
