import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// createStackNavigator is a function that takes a route configuration object and an options object and returns a React component.

import Landing from './components/pages/Landing';
import Account from './components/pages/Account';
import Welcome from './components/pages/Welcome';


const App = createStackNavigator(

  //shorthand config
  {
    Landing: {
      screen: Landing,
      navigationOptions: {
        header: null
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        headerTitle: 'Account'
      }
    },
    Welcome: {
      screen: Welcome
    }
  },
  {
    initialRouteName: 'Landing'
  }
);


// navigation container
export default createAppContainer(App)