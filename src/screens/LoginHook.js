import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { withNavigation } from 'react-navigation';

const LoginHook = () =>  {

  const [user, setUser] = useState('Digite seu usuário');
  const [password, setPassword] = useState('Digite sua senha');


  return (
    <View style = {style.container}>
      <ImageBackground source={require('./../images/background.jpg')} style={{height:'100%', width:'100%'}}>
        <View style = {style.login}>
          <Text style = {style.h1} >Login</Text>
        </View>
        <View style ={style.areaForm}>
          <View style={style.form}>
            <Text stlye={style.txt}>Usuário:</Text>
            <TextInput style={style.input} onChangeText={(txt)=>setUser(txt)} value = {user}/>
            <Text stlye={style.txt}>Senha:</Text>
            <TextInput style={style.input} onChangeText={(txt)=>setPassword(txt)} value = {password}/>
          </View>
          <View style={style.areaButton}>
            <TouchableOpacity style={style.button} onPress={()=>this.props.navigation.navigate('Home')}>
              <Text style={style.txtButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container:{
    display:'flex',
    flex:1
  },
  h1:{
    fontSize:30
  },
  login:{
    justifyContent:'center',
    flex:1,
    alignItems:'center'
  },
  areaForm:{
    justifyContent:'space-around',
    flex:2,
    alignItems:'center'
  },
  form:{
    flex:1
  },  
  input:{
    width:300,
    height:50,
    backgroundColor:'white',
    borderRadius:25,
    opacity:0.5,
    paddingLeft:10,
    marginTop:10
  },
  areaButton:{
    flex:1,
    justifyContent:'space-around'
  },  
  button:{
    height:60,
    width:150,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    opacity:0.7
  },
  txtButton:{
    fontSize:20
  },
  txt:{
    marginTop:10
  }

});

export default withNavigation(LoginHook);