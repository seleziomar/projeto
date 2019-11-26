import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './src/screens/Login';
import Home from './src/screens/Home';

const AppNavigator = createStackNavigator({
  Login: { screen:Login },
  Home: { screen:Home }
},{
  defaultNavigationOptions:{
    header:null
  }
});

export default createAppContainer(AppNavigator);



