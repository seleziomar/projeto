import React, {Component} from 'react';
import {View, Text, Image, TextInput, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class searchPage extends Component {

    constructor(props){
      super(props);
      this.state = {
        data:[
          {key:0, name:'Seleziomar', age:24, sex:'Masculino'},
          {key:1, name:'Sara', age:24, sex:'Feminino'},
          {key:2, name:'Maria', age:20, sex:'Feminino'},
          {key:3, name:'Pedro', age:30, sex:'Masculino'},
          {key:4, name:'Leonardo', age:22, sex:'Masculino'},
          {key:5, name:'Seleziomar', age:24, sex:'Masculino'},
          {key:6, name:'Sara', age:24, sex:'Feminino'},
          {key:7, name:'Maria', age:20, sex:'Feminino'},
          {key:8, name:'Pedro', age:30, sex:'Masculino'},
          {key:9, name:'Leonardo', age:22, sex:'Masculino'},
          
        ],
        name:{}
      };

      this.searchPatient = this.searchPatient.bind(this);
    }

    searchPatient(key){
      this.props.navigation.navigate('profilePatient',{key:key});
    }

    flatRender(item){
      
      return(
        <View>
          <TouchableOpacity onPress={()=>this.searchPatient(item.key)}>
            <View style={style.listItem}>
              <View>
                <Icon name="user-circle" size={50} color={'#708090'} />
              </View>
              <View>
                <Text style={style.info}>Nome: {item.name}</Text>
                <Text style={style.info}>Sexo: {item.sex}</Text>
                <Text style={style.info}>Idade: {item.age} anos</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }

    render(){
        return(
            <View style = {style.container}>
              <View style={style.headerArea}>
                <Text style = {style.header}>Buscar</Text>
                <Text>{this.state.nome}</Text>
              </View>
              <View style = {style.inputArea}>
                <Icon name="search"  size={30} color={"#ddd"}/>
                <TextInput onChangeText={(name)=>this.setState(name)} style={style.input} />
              </View>
              <View style={style.listArea}>
                <FlatList data = {this.state.data} renderItem={({item})=>this.flatRender(item)} />
              </View>
            </View>
        );
    };
}

const style = StyleSheet.create({
  container:{
    display:'flex',
    alignItems:'center',
    flex:1
  },
  header:{
    fontSize:30,
    color:'#ddd',
    marginTop:10
  },
  headerArea:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  listItem:{
    borderColor:"#ddd",
    borderWidth:1,
    borderRadius:10,
    height:80,
    flexDirection:'row',
    justifyContent:'space-around',
    padding:5,
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 1,
    alignSelf:'stretch',
    margin:5
  },
  listArea:{
    flex:10,
    borderRadius:10,
    borderColor:'#ddd',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 2,
    marginBottom:5,
    marginTop:5,
    alignSelf:'stretch',
    margin:5
  },
  imgItem:{
    width:60,
    height:60
  },
  input:{
    //borderRadius:5,
    // borderWidth:1,
    // borderColor:'#ddd',
    width:350,
    height:50
  },
  inputArea:{
    flex:1,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#ddd',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:5,
    borderColor:'#ddd',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 2,
    alignSelf:'stretch',
    margin:5
  },
  info:{
    color:'#708090'
  }
});