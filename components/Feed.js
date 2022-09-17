import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed(){
		const feed = [
			{
				id: 1,
				nome: 'Patolino',
				imgPerfil: require('../assets/imagens/patolino1.jpg'),
				imgPost: require('../assets/imagens/patolino.jpg'),
				aspectRatio: 1.777
			},
			{
				id: 2,
				nome: 'Perna',
				imgPerfil: require('../assets/imagens/teste1.png'),
				imgPost: require('../assets/imagens/nasa1.jpg'),
				aspectRatio: 1.904
			},
			{
				id: 3,
				nome: 'Patolino',
				imgPerfil: require('../assets/imagens/patolino1.jpg'),
				imgPost: require('../assets/imagens/nasa2.jpg'),
				aspectRatio: 1.501
			},
		
		];
	function renderItem({item}){
		return <View style = {styles.post}>
				<View style = {styles.postheader}>
					<View style = {styles.postheaderEsquerda}>
						<Image style = {styles.postheaderImg} source = {item.imgPerfil}/>
						<Text> {item.nome} </Text>
					</View>
					<FontAwesome5 name = "ellipsis-h" size = {16} color = "black"></FontAwesome5>
				</View>
				<Image style= {styles.postimg} aspectRatio={item.aspectRatio} source = {item.imgPost}/>
				<View style = {styles.footer}>
					<FontAwesome5 style={styles.footericon} name = "heart" size = {32} color = "black"></FontAwesome5>
					<FontAwesome5 style={styles.footericon} name = "comment" size = {32} color = "black"></FontAwesome5>
					<FontAwesome5 style={styles.footericon} name = "paper-plane" size = {32} color = "black"></FontAwesome5>
				</View>
			</View>
	}
	

	return(
		<View style = {styles.feed}>
			<FlatList
				data = {feed}
				renderItem = {renderItem}
				keyExtractor = {item => item.id}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
	
}


const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: 'white'
    
  },
  post: {
	 
	  backgroundColor: '#fff',
  },
  postheader: {
	  flexDirection: 'row',
	  height: 50,
	  alignItems: 'center',
	  justifyContent: 'space-between',
	  margin: 5,
  },
  postheaderImg: {
	  margin: 5,
	  height: 50,
	  width: 50,
	  borderRadius:25
  },
  postheaderEsquerda: {
	 flexDirection: 'row',
	 alignItems: 'center'
  },
  postimg: {
	  width: '100%',
	  height: undefined,
  },
  footer: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
	alignItems: 'center',
	
  }, 
  footericon: {
	  margin: 5,
  }
  
});
