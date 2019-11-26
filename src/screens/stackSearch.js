import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import searchPage from './../screens/searchPage';
import profilePatient from './profilePatient';
import testPage from './testPage';

const Navegador = createStackNavigator({
  searchPage: { screen:searchPage, navigationOptions:()=>({header:null}) },
  profilePatient: { screen:profilePatient, navigationOptions:()=>({title:'Perfil do Paciente'}) },
  testPage: { screen:testPage, navigationOptions:()=>({title:'Página do Teste'}) }
},{
  navigationOptions:{
    tabBarLabel:'Busca',
    tabBarIcon:()=>(
      <Icon name="search" size={26} color="#708090" />
    )
    }
});
export default Navegador;