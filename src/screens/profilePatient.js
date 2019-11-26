import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class profilePatient extends Component {

    constructor(props){
        super(props);

        this.state={
            dat:[
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
            data:[
                {key:1, date:'01/08/2019', result:'Médio', professional:'Marcelo'},
                {key:1, date:'11/08/2019', result:'Médio', professional:'Marcelo'},
                {key:1, date:'21/08/2019', result:'Bom', professional:'Marcelo'},
                {key:1, date:'31/08/2019', result:'Bom', professional:'Marcelo'},
                {key:1, date:'10/09/2019', result:'Muito Bom', professional:'Marcelo'},
                {key:1, date:'01/08/2019', result:'Médio', professional:'Marcelo'},
                {key:1, date:'11/08/2019', result:'Médio', professional:'Marcelo'},
                {key:1, date:'21/08/2019', result:'Bom', professional:'Marcelo'},
                {key:1, date:'31/08/2019', result:'Bom', professional:'Marcelo'},
                {key:1, date:'10/09/2019', result:'Muito Bom', professional:'Marcelo'},
            ],
            key:this.props.navigation.getParam('key')
        }

        this.flatRender = this.flatRender.bind(this);
        this.searchTest = this.searchTest.bind(this);
    }

    searchTest(keyTest){
        this.props.navigation.navigate('testPage', {'keyTest':keyTest, 'key':this.state.key});
    }

    flatRender(item){
        return(
            <View>
                <TouchableOpacity onPress={()=>this.searchTest(item.keyTest)}>
                    <View style={style.listItem}>
                        <Text>{item.date}</Text>
                        <Text>{item.result}</Text>
                        <Text>{item.professional}</Text>
                    </View>
                </TouchableOpacity>
            </View>    
        )
    }

    render(){
        return(
            <View style={style.container}>
                <View style={style.imgArea}>
                    <View style={style.img}>
                        <Icon name={'user'} size={90} color={'#708090'} />
                    </View>
                    <View style={style.imgTxt}>
                        <Text style={style.info}>Nome: {this.state.dat[this.state.key].name}</Text>
                        <Text style={style.info}>Sexo: {this.state.dat[this.state.key].sex}</Text>
                        <Text style={style.info}>Idade: {this.state.dat[this.state.key].age} anos</Text>
                    </View>
                </View>
                <View style={style.listArea}>
                    <View style={style.listTitle}>
                        <Text>Data</Text>
                        <Text>Resultado</Text>
                        <Text>Prof.</Text>
                    </View>
                    <FlatList data={this.state.data} renderItem={({item})=>this.flatRender(item)} />
                </View>
            </View>
        )
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
    listItem:{
        height:50,
        width:300,
        borderRadius:5,
        borderWidth:1,
        borderColor:"#ddd",
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom:5,
        padding:5
    },
    listTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },  
    listArea:{
        flex:3,
        marginBottom:10,
        borderColor:'#ddd',
        borderWidth:1,
        borderRadius:10,
        padding:5,
        elevation:1
    },
    info:{
        color:'#708090'
    }
});