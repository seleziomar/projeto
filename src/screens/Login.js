import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import System from './../System';

export default class Login extends Component {

    constructor(props){
      super(props);
      this.state={
        email:'',
        password:''
      };

      this.logar = this.logar.bind(this);
      System.logout();
    }

    logar() {
      
      System.addAuthListener((user)=>{
        if(user){
          this.props.navigation.navigate('Home');
        }
      })

      System.login(this.state.email, this.state.password)
      .catch((error)=>alert(error.code));

    }

    render(){
        return(
            <View style = {style.container}>
            <ImageBackground source={require('./../images/running.jpg')} style={{height:'100%', width:'100%'}}>
                <View style = {style.login}>
                <Text style = {style.h1} >Login</Text>
                </View>
                <View style ={style.areaForm}>
                <View style={style.form}>
                    <Text stlye={style.txt}>Usuário:</Text>
                    <TextInput style={style.input} onChangeText={(email)=>{this.setState({email})}}/>
                    <Text stlye={style.txt}>Senha:</Text>
                    <TextInput secureTextEntry={true} style={style.input} onChangeText={(password)=>{this.setState({password})}}/>
                </View>
                <View style={style.areaButton}>
                    <TouchableOpacity style={style.button} onPress={this.logar}>
                    <Text style={style.txtButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ImageBackground>
            </View>
        );
    };
}
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
      marginTop:10,
      borderWidth:1,
      borderColor:'#ddd'
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
      opacity:0.7,
      borderColor:'#ddd',
      borderWidth:1
    },
    txtButton:{
      fontSize:20
    },
    txt:{
      marginTop:10
    }
  
  });