import React, {Component} from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class checkPatient extends Component {

    render(){
        return(
            <View style = {style.container}>
              <View style={style.titleArea}>
                <Text style = {style.title}>Dados do paciente</Text>
              </View>
              <View style={style.form}>
                  <Text style={style.inputTxt}>Nome:</Text>
                  <TextInput style={style.input} />
                  <Text style={style.inputTxt}>Sobrenome:</Text>
                  <TextInput style={style.input}/>
                  <Text style={style.inputTxt}>CPF:</Text>
                  <TextInput style={style.input}/>
              </View>
              <View style={style.btnArea}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('testing')}>
                    <Icon name={'arrow-circle-right'} size={60} color={'#4682B4'} />
                </TouchableOpacity>
              </View>
            </View>
        );
    };
}

const style = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  titleArea:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },    
  title:{
    fontSize:30,
    color:'#696969'
  },
  form:{
    flex:2,
    //borderColor:'#ddd',
    //borderWidth:1,
    //borderRadius:5,
    //padding:5
  },      
  input:{
    width:300,
    height:45,
    backgroundColor:'white',
    borderRadius:25,
    paddingLeft:10,
    marginTop:10,
    opacity:0.8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
  },
  inputTxt:{
    color:'#696969'
  },    
  btnArea:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  }

});