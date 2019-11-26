import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import homePage from './../screens/homePage';
import checkPatient from './checkPatient';

const Navegador = createStackNavigator({
  Home: { screen:homePage, navigationOptions:()=>({header:null}) },
  checkPatient:{ screen: checkPatient, navigationOptions:()=>({title:'Novo Teste'}) }
},{
  navigationOptions:{
    tabBarLabel:'Home',
    tabBarIcon:()=>(
      <Icon name="home" size={26} color="#708090" />
    )
  }
});
export default Navegador;