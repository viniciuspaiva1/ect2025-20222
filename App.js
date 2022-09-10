import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="light" />
      <View style = {styles.header}>
      <Image style={styles.ufrngram} source = {require('./assets/imagens/ufrngram.png')}/>
      <FontAwesome5 name = "paper-plane" size = {24} color = "black"></FontAwesome5>
    </View>
    <View style = {styles.stories}> 
      <View style = {styles.story}> 
      <Image style= {styles.imgstory} source = {require('./assets/imagens/teste1.png')}/>
            <Text> Perna </Text>
      </View>
      <View style = {styles.story}> 
      <Image style= {styles.imgstory} source = {require('./assets/imagens/teste1.png')}/>
            <Text> Perna </Text>
      </View>

      <View style = {styles.story}> 
      <Image style= {styles.imgstory} source = {require('./assets/imagens/teste1.png')}/>
            <Text> Perna </Text>
      </View> 
      <View style = {styles.story}> 
      <Image style= {styles.imgstory} source = {require('./assets/imagens/teste1.png')}/>
            <Text> Perna </Text>
      </View> 
      <View style = {styles.story}> 
      <Image style= {styles.imgstory} source = {require('./assets/imagens/teste1.png')}/>
            <Text> Perna </Text>
      </View>    
    </View>
    <View style = {styles.feed}>
		<View style = {styles.post}>
			<View style = {styles.postheader}>
				<View style = {styles.postheaderEsquerda}>
					<Image style = {styles.postheaderImg} source = {require('./assets/imagens/teste1.png')}/>
					<Text> Perna </Text>
				</View>
				<FontAwesome5 name = "ellipsis-h" size = {16} color = "black"></FontAwesome5>
			</View>
			<Image style= {styles.postimg} aspectRatio={1.777} source = {require('./assets/imagens/patolino.jpg')}/>
		</View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
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
  },
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
  },
  feed: {
    flex: 1,
    backgroundColor: 'white'
    
  },
  post: {
	 
	  backgroundColor: '#fff',
  },
  postheader: {
	  flexDirection: 'row',
	  height: 60,
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
  }
  
  
  
});
