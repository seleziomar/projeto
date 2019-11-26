import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class profileProfessional extends Component{

    constructor(props){
        super(props);

        this.state={
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
                
              ]
        }

        this.flatRender = this.flatRender.bind(this);
        this.goTestPage = this.goTestPage.bind(this);
    }

    goTestPage(key){
        this.props.navigation.navigate('testPage', {key:key})
    }

    flatRender(item){

        return(
            <View>
                <TouchableOpacity onPress={()=>this.goTestPage(item.key)}>
                    <View style={style.listItem}>
                        <View>
                            <Icon name={'bar-chart-o'} size={50} color={'#4682B4'} />
                        </View>
                        <View>
                            <Text style={style.infoListItem}>Nome: {item.name}</Text>
                            <Text style={style.infoListItem}>Sexo: {item.sex}</Text>
                            <Text style={style.infoListItem}>Idade: {item.age} anos</Text>
                        </View>
                    </View> 
                </TouchableOpacity>
            </View>
        );
    }

    render(){
        return(
            <View style={style.container}> 
                <View style={style.imgArea}>
                    <View style={style.img}>
                        <Icon name={'user-md'} size={90} color={'#708090'} />
                    </View>
                    <View style={style.imgTxt}>
                        <Text style={style.infoTxtImg}>Nome: Seleziomar</Text>
                        <Text style={style.infoTxtImg}>Sexo: Masculino</Text>
                        <Text style={style.infoTxtImg}>Idade: 24 anos</Text>
                        <TouchableOpacity style={style.btnArea}>
                            <Icon name={'gear'} size={20} color={'#708090'} />
                            <Text style={{color:'#708090'}}>Editar Perfil</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.listArea}>
                    <FlatList style={style.flat} data={this.state.data} renderItem={({item})=>this.flatRender(item)}/>
                </View>
            </View>
        );
    };
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
    infoTxtImg:{
        color:'#708090'
    },
    listArea:{
        flex:3,
        alignItems:'center',
        borderColor:'#ddd',
        borderWidth:1,
        borderRadius:10,
        elevation:1, 
        alignSelf: 'stretch',
        margin:5
        
    },
    listItem:{
        margin:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#ddd',
        alignSelf:'stretch',
        padding:5,
        flexDirection:'row',
        justifyContent:'space-around',
        elevation:1
    },
    infoListItem:{
        color:'#708090'
    },
    flat:{
        alignSelf:'stretch'
    },
    btnArea:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:5,
        height:30,
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:2,
        elevation:1
    }

});