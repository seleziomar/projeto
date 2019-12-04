import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from './../config';


export default class testing extends Component{
    
    constructor(props){
        super(props);
        this.state={
            sinal:'Carregando valor do sinal.'
        }

        firebase.database().ref('bpm').on('value', (snapshot)=>{
            this.setState({sinal:0})
            this.setState({sinal:snapshot.val()})
        })

    }


    render(){

        return(
            <View style={styles.container}>
                <Text>{this.state.sinal}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})