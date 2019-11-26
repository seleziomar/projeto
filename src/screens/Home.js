import { createBottomTabNavigator } from 'react-navigation-tabs';


import stackHome from './stackHome';
import stackPerfil from './stackPerfil';
import stackSearch from './stackSearch';

const HomeTabNavigator = createBottomTabNavigator({
  stackHome: { screen:stackHome },
  stackSearch:{ screen: stackSearch },
  stackPerfil: { screen:stackPerfil }
},{
  defaultNavigationOptions:() => ({
    showIcon:true
  })
});
console.disableYellowBox = true;
export default HomeTabNavigator;



