import React, {Component} from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class homePage extends Component {

    render(){
        return(
            <View style = {style.container}>
              <View style={style.titleArea}>
                <Text style = {style.title}>Bem-vindo</Text>
              </View>
              <View style={style.graphArea}>

              </View>
              <View style = {style.btnArea}>
                <TouchableOpacity style={style.btn} onPress={()=>this.props.navigation.navigate('checkPatient')}>
                  <Icon name="plus-square-o" size={60} color={"#4682B4"}/>
                  <Text style={style.btnTxt}>Novo teste</Text>
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
    color:'#708090'
  },
  btnArea:{
    flex:1,
    justifyContent:'center'
  },
  btn:{
    alignItems:'center'
  },
  btnTxt:{
    color:"#4682B4"
  },
  graphArea:{
    flex:2,
    borderRadius:10,
    borderColor:'#708090',
    borderWidth:1,
    width:300,
    shadowColor: "#708090",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    
     elevation: 2,
  }
});