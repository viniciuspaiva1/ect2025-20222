import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TextInput } from 'react-native-gesture-handler';

export default function LoginScreen({navigation}) {
    const[user,setUser] = useState('');
    const [password, setPassword] = useState('');

    async function logar(){
        const hearderOptions ={
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({user,password})
        };
        const response = await fetch('https://mobile.ect.ufrn.br:3000/login', hearderOptions);
        if(response.status === 200){
            const token  = await response.text();
            await AsyncStorage.setItem('token', token);
            navigation.navigate('HomeScreen');
        }else {
            Alert.alert(
                'Erro',
                'Usuário ou senha inválidos'
            )
        }

    }


  return (
<View style={styles.container}>
		<StatusBar style="light" />
        <View style ={styles.loginContainer}>
            <TextInput 
              style = {styles.input}
              placeholder = "Usuário..."
              value = {user}
              onChangeText = {setUser}
                 />
            <TextInput 
              style = {styles.input} 
              placeholder = "Senha..." 
              secureTextEntry={true}
              value={password}
              onChangeText = {setPassword}
            />
            <TouchableOpacity 
            style = {styles.sendButton}
            onPress={()=>logar()}
            >
                <Text>Enviar</Text>
            </TouchableOpacity>
        </View>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  loginContainer: {
    justifyContent: 'center',
    margin: 20,
    borderColor: 'gray',
    borderWidth:1,
    backgroundColor: '#f9f6eb',
    padding: 40,
    borderRadius: 5,

  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 10,
  },
  sendButton: {
    padding: 10,
    width: 120,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center'
    
  },
  
  
});
