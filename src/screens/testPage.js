import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AreaChartExample from './AreaChartExample';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class testPage extends Component{

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
              key:this.props.navigation.getParam('key')
        }
        this.profilePatient = this.profilePatient.bind(this);
    }

    profilePatient(){
        this.props.navigation.navigate('profilePatient', {'key':this.state.key})
    }

    render(){

        return(
            <View style={style.container}>
                <View style={style.imgArea}>
                    <View style={style.img}>
                        <TouchableOpacity onPress={()=>this.profilePatient()}>
                            <Icon name={'user'} size={90} color={'#708090'} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.imgTxt}>
                        <Text style={style.info}>Nome: {this.state.data[this.state.key].name}</Text>
                        <Text style={style.info}>Sexo: {this.state.data[this.state.key].sex}</Text>
                        <Text style={style.info}>Idade: {this.state.data[this.state.key].age} anos</Text>
                    </View>
                </View>
                <View style={style.testArea}>
                    <Text>Título do Teste</Text> 
                    <AreaChartExample />
                </View>
                <View style={style.infoTestArea}>
                    <Text>Data: 01/01/2019</Text>
                    <Text>Profissional: Marcelo</Text>
                    <Text>Resultado: Muito bom</Text>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        justifyContent:'center'
    },
    imgTxt:{
        justifyContent:'center'
    },
    imgArea:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-around',
        width:300
    },
    testArea:{
        flex:3,
        marginBottom:10,
        borderColor:'#ddd',
        borderWidth:1,
        borderRadius:10,
        width:350,
        alignItems:'center',
        elevation:1
    },
    info:{
        color:'#708090'
    },
    infoTestArea:{
        flex:1,
        borderColor:'#ddd',
        borderWidth:1,
        width:350,
        marginBottom:5,
        padding:5,
        elevation:1
    }
});