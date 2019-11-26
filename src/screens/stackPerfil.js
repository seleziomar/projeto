import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import profileProfessional from './profileProfessional';
import profilePatient from './profilePatient';

const Navegador = createStackNavigator({
  perfilPage: {
    screen:profileProfessional, navigationOptions:()=>({header:null}),
    // screen:profilePatient
  }
},{
  navigationOptions:{
    tabBarLabel:'Perfil',
    tabBarIcon:()=>(
      <Icon name="user-md" size={26} color="#708090" />
    )
    }
});
export default Navegador;