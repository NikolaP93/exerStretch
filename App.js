import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Landing from './components/pages/Landing';
import Account from './components/Account';


const App = createStackNavigator(

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
    }
  },
  {
    initialRouteName: 'Landing',
    defaultNavigationOptions: {
      // headerStyle: {
      //   height: 50,
      // },
      // headerTintColor: 'orange',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      //   color: 'red'
      // },
      // headerBackTitle: 'Yeet',
      // headerBackTitleVisible: true

    },
  }
);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: 'red'
  }
});

export default createAppContainer(App)